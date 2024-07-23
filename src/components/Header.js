import React, { useState } from "react";
import "../../src/index.css"

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <a className="text-white text-2xl font-bold" href="#">Navbar</a>
        <button
          onClick={handleShow}
          className="text-white lg:hidden px-3 py-2 border border-gray-700 rounded-md"
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-10 left-full w-64 h-full bg-gray-800 transform ${show ? "translate-x-21" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 lg:hidden`}
        >
          <div className="flex flex-col justify-end items-end p-4 ">
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="#">Home</a>
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mt-2" href="#">About</a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="#">Home</a>
          <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="#">Link</a>
          <div className="relative">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" aria-haspopup="true">
              Dropdown
            </button>
          </div>
          <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="#">Disabled</a>
        </div>

        <form className="hidden lg:flex lg:items-center lg:space-x-2">
          <input className="p-2 rounded-md border border-gray-300" type="search" placeholder="Search" aria-label="Search"/>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" type="submit">Search</button>
        </form>
      </div>
    </nav>
    
  );
}

export default Header;
