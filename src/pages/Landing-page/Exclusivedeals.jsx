import React from 'react'

function Exclusivedeals() {
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Up to -40% <span className="text-orange-500">Order.uk exclusive
                    deals</span></h2>
                <div className="flex space-x-4">
                    <span className="text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">Vegan</span>
                    <span className="text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">Sushi</span>
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full cursor-pointer">Pizza & Fast food</span>
                    <span className="text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">others</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="/images/Rectangle 8.png" alt="Chef Burgers London" className="w-full h-48 object-cover"/>
                        <div className="absolute top-4 right-4 bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded-full">-40%</div>
                        <div className="p-4">
                            <p className="text-xs text-gray-500 mb-1">Restaurant</p>
                            <h3 className="text-lg font-semibold text-gray-900">Chef Burgers London</h3>
                        </div>
                </div>
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="/images/Rectangle 9.png" alt="Grand Al Ai London" className="w-full h-48 object-cover"/>
                        <div className="absolute top-4 right-4 bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded-full">-20%</div>
                        <div className="p-4">
                            <p className="text-xs text-gray-500 mb-1">Restaurant</p>
                            <h3 className="text-lg font-semibold text-gray-900">Grand Al Ai London</h3>
                        </div>
                </div>
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="/images/Rectangle 10.png" alt="Butterbot Cafe London" className="w-full h-48 object-cover"/>
                        <div className="absolute top-4 right-4 bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded-full">-17%</div>
                        <div className="p-4">
                            <p className="text-xs text-gray-500 mb-1">Restaurant</p>
                            <h3 className="text-lg font-semibold text-gray-900">Butterbot Cafe London</h3>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Exclusivedeals