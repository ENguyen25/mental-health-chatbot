import { useEffect } from "react";
export default function Navbar() {

  useEffect(() => {
    const handleScroll = () => {
        const nav = document.querySelector(".navbar");
        if (!nav) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > nav.clientHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
        document.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
      <div className="navbar fixed w-full flex justify-center py-5 z-10">
        <nav className="w-[1000px] flex items-center">
            <p className="w-1/6 font-bold">CLARITY</p>
            <ul className="w-4/6 flex gap-8">
                <li>Features</li>
                <li>Blog</li>
            </ul>
            <div className="w-1/6 flex justify-end">
                <button className="white-button">Log In</button>
            </div>
        </nav>
      </div>
    )
  }