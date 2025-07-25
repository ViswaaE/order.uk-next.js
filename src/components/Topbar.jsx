import React from 'react'

export default function Topbar() {
    return (
        <section class="topbar md:block hidden">
            <div class="flex justify-between items-center bg-gray-50 px-4 h-14 text-sm">
                <p class="text-gray-800 whitespace-nowrap">
                    🌟 Get 5% Off your first order,
                    <span class="text-orange-500 font-semibold">Promo: ORDER5</span>
                </p>

                <div class="flex items-center space-x-1 text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c4.418 0 8-3.582 8-8S16.418 5 12 5 4 8.582 4 13s3.582 8 8 8z" />
                    </svg>
                    <span>Regent Street, A4, A4201, London</span>
                    <a href="#" class="text-orange-500 hover:underline ml-2">Change Location</a>
                </div>

                <div class="flex items-center h-14 bg-green-700 text-white rounded-md overflow-hidden">
                    <div class="flex items-center px-3 border-r border-green-600">
                        <img src="/images/Full Shopping Basket.png" alt="Basket" class="h-7 w-4 mr-1" />
                        <span>23 Items</span>
                    </div>
                    <div class="px-3 border-r border-green-600">
                        GBP 79.89
                    </div>
                    <div class="px-2">
                        <img src="/images/Forward Button.png" alt="Forward" class="h-4 w-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}
