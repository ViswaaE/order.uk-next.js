import Image from 'next/image'
import React from 'react'

export default function Herosection() {
    return (
        <section className="herosection">
            <div className="relative min-h-screen bg-gray-100 flex items-center justify-center py-10 overflow-hidden">
                <div
                    className="relative w-full max-w-7xl bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row p-8 lg:p-12 items-center justify-between overflow-hidden">

                    <div className="flex-1 lg:pr-12 text-center lg:text-left z-10">
                        <p className="text-lg text-gray-700 mb-2">Order Restaurant food, takeaway and groceries.</p>
                        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            <span className="text-gray-900 block">Feast Your Senses,</span>
                            <span className="text-orange-500 block">Fast and Fresh</span>
                        </h2>
                        <p className="text-gray-600 mb-4">Enter a postcode to see what we deliver</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input type="text" placeholder="e.g. EC4R 3TE"
                                className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300" />
                            <button
                                className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md">Search</button>
                        </div>
                    </div>

                    <div className="relative flex-1 flex justify-center items-center mt-8 lg:mt-0 z-10">
                        <img src="/images/girl eating.png" alt="Girl eating pizza"
                            className="relative right-40 w-full lg:max-w-none lg:w-auto h-auto max-h-[600px] object-contain" />

                        <div
                            className="absolute inset-y-0 right-0 w-3/5 bg-orange-500 rounded-l-full transform translate-x-1/2 -rotate-12 origin-left scale-150 hidden lg:block">
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
