// src/components/Navbar.js
import React from 'react';
import navbar_logo from '../images/navbar_logo.png'; // Adjust path if necessary

function Navbar() {
  return (
    <nav className="w-full bg-[#0D1B2A] text-[#C2CAAA] p-4 fixed top-0 left-0 z-10 flex items-center" style={{ height: '60px' }}>
      <div className="flex items-center w-full justify-between mx-auto">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <img src={navbar_logo} alt="Logo" className="w-full h-16 rounded-full" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-grow justify-center space-x-8 ml-4">
          <li>
            <a href="#home" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#farmers" className="hover:text-white">
              Farmers
            </a>
          </li>
          <li>
            <a href="#companies" className="hover:text-white">
              Companies
            </a>
          </li>
          <li>
            <a href="#our-products" className="hover:text-white">
              Our Products
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About Us
            </a>
          </li>
        </ul>

        {/* Right Corner Section */}
        <div className="flex items-center">
          <a href="#contact" className="bg-[#4E6762] text-white px-4 py-2 rounded hover:bg-[#3E5561] transition-colors duration-200">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
