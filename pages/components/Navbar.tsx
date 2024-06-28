export default function Navbar() {
    return (
      <div className="w-full flex justify-center py-5">
        <nav className="w-[1000px] flex items-end">
            <p className="w-1/6 font-bold">CLARITY</p>
            <ul className="w-4/6 flex gap-8">
                <li>Features</li>
                <li>Blog</li>
            </ul>
            <div className="w-1/6 flex justify-end">
                <button className="white-button">Try Free</button>
            </div>
        </nav>
      </div>
    )
  }