export default function Navbar() {
    return (
      <div className="w-full flex justify-center py-5">
        <nav className="w-[800px] flex items-end">
            <h1 className="w-1/6 font-bold">ChatBot</h1>
            <ul className="w-4/6 flex gap-8">
                <li>Features</li>
                <li>Blog</li>
            </ul>
            <div className="w-1/6">
                <button className="white-button">Try Free</button>
            </div>
        </nav>
      </div>
    )
  }