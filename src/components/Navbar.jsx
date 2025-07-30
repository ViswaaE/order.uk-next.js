"use client"
import React, { useState } from 'react';

// SVG Icon for the hamburger menu
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

// SVG Icon for the close button (X)
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);


export default function App() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Using a relative container to position the mobile menu
    <section className="relative navbar bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* NOTE: I've replaced the Next.js <Image> component with a standard <img> tag 
              and used a placeholder for the logo, as this is a standard React environment.
            */}
            <img
              src="/images/LOGO 1.png"
              alt="Company Logo"
              width={150}
              height={50}
              className="h-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">
                Browse Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">
                Special Offers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">
                Track Order
              </a>
            </li>
          </ul>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center">
             <button className="ml-4 flex items-center space-x-2 px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
                <span>Login / Signup</span>
             </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {/* This menu slides down from the top */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden absolute top-full left-0 w-full bg-white shadow-lg z-20`}
      >
        <ul className="flex flex-col items-center space-y-4 px-4 py-6">
          <li>
            <a href="#" className="block w-full text-center px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block w-full text-center text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 py-2">
              Browse Menu
            </a>
          </li>
          <li>
            <a href="#" className="block w-full text-center text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 py-2">
              Special Offers
            </a>
          </li>
          <li>
            <a href="#" className="block w-full text-center text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 py-2">
              Restaurants
            </a>
          </li>
          <li>
            <a href="#" className="block w-full text-center text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 py-2">
              Track Order
            </a>
          </li>
          <li className="w-full pt-4">
            <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
              <span>Login / Signup</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
