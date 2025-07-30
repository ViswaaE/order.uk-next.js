import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <section className="navbar bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

                <div className="flex items-center space-x-2">
                    <Image
                        src="/images/LOGO 1.png"
                        alt="Cart Icon"
                        width={150}
                        height={200} />
                </div>

                <ul className="hidden lg:flex items-center space-x-6">
                    <li>
                        <a href="/"
                            className="px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">Browse
                            Menu</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">Special
                            Offers</a>
                    </li>
                    <li>
                        <a href="/Restaurant-Detail"
                            className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">Restaurants</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300">Track
                            Order</a>
                    </li>
                </ul>

                <button
                    className="ml-4 flex items-center space-x-2 px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
                    <span>Login/Signup</span>
                </button>
            </nav>
        </section>

    )
}
