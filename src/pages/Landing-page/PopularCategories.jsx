import React from 'react'

function PopularCategories() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order.uk Popular Categories 😋</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <a href="./Restaurant.html">
                    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 text-center">
                        <img src="/images/Rectangle 13.png" alt="Burgers & Fast food"
                            className="w-24 h-24 object-cover rounded-full mb-3"/>
                            <h3 className="text-sm font-semibold text-gray-900">Burgers & Fast food</h3>
                            <p className="text-xs text-gray-500">23 Restaurants</p>
                    </div>
                </a>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 text-center">
                    <img src="/images/Rectangle 15.png" alt="Salads" className="w-24 h-24 object-cover rounded-full mb-3"/>
                        <h3 className="text-sm font-semibold text-gray-900">Salads</h3>
                        <p className="text-xs text-gray-500">12 Restaurants</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 text-center">
                    <img src="/images/Rectangle 17.png" alt="Pasta & Casuals" className="w-24 h-24 object-cover rounded-full mb-3"/>
                        <h3 className="text-sm font-semibold text-gray-900">Pasta & Casuals</h3>
                        <p className="text-xs text-gray-500">4 Restaurants</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 text-center">
                    <img src="/images/Rectangle 19.png" alt="Pizza" className="w-24 h-24 object-cover rounded-full mb-3"/>
                        <h3 className="text-sm font-semibold text-gray-900">Pizza</h3>
                        <p className="text-xs text-gray-500">32 Restaurants</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 text-center">
                    <img src="/images/Rectangle 21.png" alt="Breakfast" className="w-24 h-24 object-cover rounded-full mb-3"/>
                        <h3 className="text-sm font-semibold text-gray-900">Breakfast</h3>
                        <p className="text-xs text-gray-500">4 Restaurants</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 text-center">
                    <img src="/images/Rectangle 23.png" alt="Soups" className="w-24 h-24 object-cover rounded-full mb-3"/>
                        <h3 className="text-sm font-semibold text-gray-900">Soups</h3>
                        <p className="text-xs text-gray-500">37 Restaurants</p>
                </div>
            </div>
        </div>
    )
}

export default PopularCategories