import React from 'react'

function PopularRestaurants() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Restaurants</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <a href="./Restaurant.html">
          <div
            className="bg-white rounded-xl  overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <img src="/images/mcD.png" alt="McDonald's London" className="w-full h-24 object-contain p-4"/>
            <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">McDonald's London</div>
          </div>
        </a>
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img src="/images/papa.png" alt="Papa Johns" className="w-full h-24 object-contain p-4"/>
          <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">Papa Johns</div>
        </div>
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img src="/images/kfc.png" alt="KFC West London" className="w-full h-24 object-contain p-4"/>
          <div className="bg-red-700 text-white text-center py-2 text-sm font-semibold">KFC West London</div>
        </div>
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img src="/images/texas.png" alt="Texas Chicken" className="w-full h-24 object-contain p-4"/>
          <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">Texas Chicken</div>
        </div>
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img src="/images/burger.png" alt="Burger King" className="w-full h-24 object-contain p-4"/>
          <div className="bg-yellow-500 text-gray-900 text-center py-2 text-sm font-semibold">Burger King</div>
        </div>
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img src="/images/shaurma.png" alt="Shaourma 1" className="w-full h-24 object-contain p-4"/>
          <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">Shaourma 1</div>
        </div>
      </div>
    </div>
  )
}

export default PopularRestaurants