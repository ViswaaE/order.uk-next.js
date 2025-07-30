"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';  

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="navbar bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            {/* Use Next.js Image component for optimized images */}
            <Image src="/images/LOGO 1.png" alt="Cart Icon" width={40} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button id="menu-toggle" className="text-gray-700 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul
          id="menu"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white lg:static lg:flex lg:flex-row lg:items-center lg:space-x-6 px-4 lg:px-0 py-4 lg:py-0 shadow-md lg:shadow-none z-50 flex-col space-y-4 lg:space-y-0`}
        >
          <li>
            {/* Use Next.js Link component for client-side navigation */}
            <Link href="/" className="px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 block text-center">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 block text-center">
              Browse Menu
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 block text-center">
              Special Offers
            </Link>
          </li>
          <li>
            <Link href="/Restaurant" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 block text-center">
              Restaurants
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300 block text-center">
              Track Order
            </Link>
          </li>

          {/* Login Button inside dropdown on mobile */}
          <li className="lg:hidden">
            <button className="w-full px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
              Login/Signup
            </button>
          </li>
        </ul>

        {/* Login Button on large screen */}
        <button className="hidden lg:flex items-center space-x-2 px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
          <span>Login/Signup</span>
        </button>
      </nav>
    </section>
  );
};

export default Navbar;