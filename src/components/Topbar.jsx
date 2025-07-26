import Image from 'next/image'
import React from 'react'

export default function Topbar() {
    return (
        <section className="topbar md:block hidden">
            <div className="flex justify-between items-center bg-gray-50 px-4 h-14 text-sm">

                {/* Offer Message */}
                <p className="text-gray-800 whitespace-nowrap">
                    🌟 Get 5% Off your first order,{" "}
                    <span className="text-orange-500 font-semibold">Promo: ORDER5</span>
                </p>

                {/* Location Info */}
                <div className="flex items-center space-x-1 text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c4.418 0 8-3.582 8-8S16.418 5 12 5 4 8.582 4 13s3.582 8 8 8z"
                        />
                    </svg>
                    <span>Regent Street, A4, A4201, London</span>
                    <a href="#" className="text-orange-500 hover:underline ml-2">Change Location</a>
                </div>

                {/* Cart Section */}
                <div className="flex items-center h-14 bg-green-700 text-white rounded-md overflow-hidden">

                    {/* Basket Icon and Item Count */}
                    <div className="flex items-center px-3 border-r border-green-600 space-x-1">
                        <Image
                            src="/images/Full Shopping Basket.png"
                            alt="Basket"
                            width={16}
                            height={16}
                        />
                        <span>23 Items</span>
                    </div>

                    {/* Price */}
                    <div className="px-3 border-r border-green-600">
                        GBP 79.89
                    </div>

                    {/* Forward Icon */}
                    <div className="px-2">
                        <Image
                            src="/images/Forward Button.png"
                            alt="Forward"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
