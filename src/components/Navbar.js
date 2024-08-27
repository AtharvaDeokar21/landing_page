// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="w-full bg-[#0D1B2A] text-[#C2CAAA] p-4 fixed top-0 left-0">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#home" className="hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#explore" className="hover:text-white">
            Explore
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-white">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
