// src/components/Navbar.js
import React from 'react';
import logo from '../images/logo.png'; // Adjust path if necessary

function Navbar() {
  return (
    <nav className="w-full bg-[#0D1B2A] text-[#C2CAAA] p-4 fixed top-0 left-0 z-10 flex items-center" style={{ height: '60px' }}>
      <div className="flex items-center w-full max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-grow justify-center space-x-8 ml-4">
          <li>
            <a href="#home" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-white">
              How It Works
            </a>
          </li>
          <li>
            <a href="#technology" className="hover:text-white">
              Technology
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
