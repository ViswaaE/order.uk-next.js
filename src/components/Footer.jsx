import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-gray-100 text-gray-800">
            <div class="max-w-7xl mx-auto px-4 py-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

                <div>
                    <h1 className="text-3xl font-bold flex items-center">
                        Order<span className="ml-1 bg-gray-900 text-white px-1 rounded">UK</span>
                    </h1>
                    <div class="flex mt-4 space-x-2">
                        <Image src="/images/appstore.png" alt="App Store" width={100} height={100} />
                        <Image src="/images/playstore.png" alt="Google Play" width={100} height={100} />
                    </div>
                    <p className="text-sm mt-3">
                        Company # 490039-445, Registered with<br />
                        House of companies.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Get Exclusive Deals in your Inbox</h2>
                    <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden">
                        <input type="email" placeholder="youremail@gmail.com" className="flex-1 px-4 py-2 text-sm outline-none" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs mt-2 text-gray-500">
                        we won't spam, read our <a href="#" className="underline">email policy</a>
                    </p>
                    <div className="flex space-x-4 mt-4 text-xl">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-tiktok"></i></a>
                        <a href="#"><i className="fab fa-snapchat"></i></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-black font-semibold mb-3">Legal Pages</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="text-black hover:underline">Terms and conditions</a></li>
                        <li><a href="#" className="text-black hover:underline">Privacy</a></li>
                        <li><a href="#" className="text-black hover:underline">Cookies</a></li>
                        <li><a href="#" className="text-black hover:underline">Modern Slavery Statement</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Important Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="text-black hover:underline">Get help</a></li>
                        <li><a href="#" className="text-black hover:underline">Add your restaurant</a></li>
                        <li><a href="#" className="text-black hover:underline">Sign up to deliver</a></li>
                        <li><a href="#" className="text-black hover:underline">Create a business account</a></li>
                    </ul>
                </div>

            </div>

            <div className="bg-gray-900 text-white text-sm py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                    <div className="space-x-4 text-center">
                        <a href="#" className="text-white hover:underline">Privacy Policy</a>
                        <a href="#" className="text-white hover:underline">Terms</a>
                        <a href="#" className="text-white hover:underline">Pricing</a>
                        <a href="#" className="text-white hover:underline">Do not sell or share my personal information</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
