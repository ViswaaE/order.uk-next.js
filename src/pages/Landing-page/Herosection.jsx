import Image from 'next/image';
import React from 'react';

const Herosection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

          {/* Left Content Column */}
          <div className="lg:w-1/2 py-12 px-8 lg:py-24 lg:px-16 flex flex-col justify-center z-10">
            <p className="text-lg text-gray-700 mb-4">
              Order Restaurant food, takeaway and groceries.
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="block">Feast Your Senses,</span>
              <span className="text-orange-500 block">Fast and Fresh</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Enter a postcode to see what we deliver
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="w-full sm:w-auto flex-grow px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-orange-500 text-white rounded-full font-semibold px-8 py-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                Search
              </button>
            </div>
          </div>

          {/* Right Visuals Column */}
          <div className="relative lg:w-1/2 min-h-[550px] lg:min-h-0">
            {/* Layer 1: Orange Curved Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-1/4 -right-1/2 w-[150%] h-[120%] bg-orange-500 transform rotate-[15deg] rounded-full" />
            </div>

            {/* Layer 2: Large Semi-Transparent Numbers */}
            <div className="absolute inset-0 z-10 text-white/20 font-bold text-[12rem] lg:text-[15rem] leading-none select-none">
              <span className="absolute top-0 right-20">1</span>
              <span className="absolute top-1/3 right-4">2</span>
              <span className="absolute top-2/3 right-20">3</span>
            </div>

            {/* Layer 3: The Layered Images */}
            <div className="relative z-20 h-full flex items-end justify-center pt-10">
              
              {/* Image 1 (foreground) */}
              <div className="absolute top-[400px] md:top-[100px] sm:right-[300px] w-3/4 lg:w-4/5">
                <Image
                  src="/images/girl eating.png"
                  alt="Woman eating pizza"
                  width={600}
                  height={700}
                  className="object-contain"
                  priority={true}
                />
              </div>
            </div>

            {/* Layer 4: The Notification Bubbles */}
            <div className="absolute z-30 top-12 right-[5%] sm:right-[15%] lg:right-[10%] w-64 space-y-4">
              {/* Bubble 1 */}
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-gray-800">Order <i className="fas fa-utensils ml-1"></i></span>
                  <span className="text-xs text-gray-500">NOW</span>
                </div>
                <p className="text-sm text-gray-800">We've received your order!</p>
                <p className="text-xs text-gray-600">Awaiting Restaurant acceptance</p>
              </div>
              {/* Bubble 2 */}
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-gray-800">Order Accepted <i className="fas fa-check-circle text-green-500 ml-1"></i></span>
                  <span className="text-xs text-gray-500">NOW</span>
                </div>
                <p className="text-sm text-gray-800">Your order will be delivered shortly</p>
              </div>
              {/* Bubble 3 */}
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-gray-800">Your rider's nearby <i className="fas fa-motorcycle text-orange-500 ml-1"></i></span>
                  <span className="text-xs text-gray-500">NOW</span>
                </div>
                <p className="text-sm text-gray-800">They're almost there - get ready! 👋</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Herosection;