// components/FaqSection.js

import React from 'react';

const FaqSection = () => {
    return (
        <section className="bg-[#f8f8f8] mt-7 py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 md:mb-0">
                        Know more about us!
                    </h1>
                    <nav className="flex space-x-6 text-gray-500">
                        <a href="#" className="py-2 px-4 border border-orange-400 rounded-full text-gray-800 font-semibold">
                            Frequent Questions
                        </a>
                        <a href="#" className="py-2 px-4 hover:text-gray-800">Who we are?</a>
                        <a href="#" className="py-2 px-4 hover:text-gray-800">Partner Program</a>
                        <a href="#" className="py-2 px-4 hover:text-gray-800">Help & Support</a>
                    </nav>
                </header>

                {/* Main Content Box */}
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Side: FAQ List */}
                        <div className="w-full lg:w-1/3 space-y-4">
                            <button className="w-full text-left font-semibold text-white bg-orange-500 py-3 px-5 rounded-xl shadow-md">
                                How does Order.UK work?
                            </button>
                            <button className="w-full text-left font-semibold text-gray-800 py-3 px-5 hover:bg-gray-100 rounded-xl">
                                What payment methods are accepted?
                            </button>
                            <button className="w-full text-left font-semibold text-gray-800 py-3 px-5 hover:bg-gray-100 rounded-xl">
                                Can I track my order in real-time?
                            </button>
                            <button className="w-full text-left font-semibold text-gray-800 py-3 px-5 hover:bg-gray-100 rounded-xl">
                                Are there any special discounts or promotions available?
                            </button>
                            <button className="w-full text-left font-semibold text-gray-800 py-3 px-5 hover:bg-gray-100 rounded-xl">
                                Is Order.UK available in my area?
                            </button>
                        </div>

                        {/* Right Side: Process Steps */}
                        <div className="w-full lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                                {/* Step 1 */}
                                <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 14.5c0 1.38-1.12 2.5-2.5 2.5S14 15.88 14 14.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm-5 0c0 1.38-1.12 2.5-2.5 2.5S9 15.88 9 14.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zM21 10.5c0-4.69-3.81-8.5-8.5-8.5S4 5.81 4 10.5c0 2.21.85 4.23 2.26 5.74L4 18.5h16l-2.26-2.26C19.15 14.73 20 12.71 20 10.5zM12 4.5c3.58 0 6.5 2.92 6.5 6.5s-2.92 6.5-6.5 6.5S5.5 14.58 5.5 11 8.42 4.5 12 4.5z" />
                                        </svg>
                                        <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold text-2xl">
                                            +
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2">Place an Order!</h3>
                                    <p className="text-gray-600 text-sm">Place order through our website or Mobile app</p>
                                </div>
                                {/* Step 2 */}
                                <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.92,6.62a2,2,0,0,0-.54-1.11,2,2,0,0,0-1.11-.54L18,4.68V4a2,2,0,0,0-2-2H8A2,2,0,0,0,6,4v.68L3.73,4.9A2,2,0,0,0,2.08,6.62L4.05,15H20Z" />
                                            <path d="M4.35,17H19.65a2,2,0,0,1,2,2v1a2,2,0,0,1-2,2H4.35a2,2,0,0,1-2-2v-1A2,2,0,0,1,4.35,17Z" />
                                            <rect x="5" y="11" width="14" height="2" rx="1" fill="#FFC107" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2">Track Progress</h3>
                                    <p className="text-gray-600 text-sm">You can track your order status with delivery time</p>
                                </div>
                                {/* Step 3 */}
                                <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15.5,1h-8A2.5,2.5,0,0,0,5,3.5v17A2.5,2.5,0,0,0,7.5,23h8A2.5,2.5,0,0,0,18,20.5V3.5A2.5,2.5,0,0,0,15.5,1Zm-4,21a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,11.5,22Zm3-18H8.5V3h6Z" />
                                        </svg>
                                        <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2">Get your Order!</h3>
                                    <p className="text-gray-600 text-sm">Receive your order at a lighting fast speed!</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto text-center">
                                Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;