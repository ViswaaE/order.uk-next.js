import React from 'react'

function Offers() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center text-black mb-6">All Offers from McDonald’s East London</h2>

            <div className="flex flex-wrap gap-3 justify-center bg-orange-500 p-4 rounded-md">
                <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">Offers</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Burgers</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Fries</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Snacks</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Salads</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Cold drinks</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Happy Meal®</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Desserts</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Hot drinks</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Sauces</button>
                <button className="text-black hover:bg-white px-4 py-2 rounded-full">Orbit®</button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img src="/images/first order.png" className="w-full h-56 object-cover" />
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded">-20%</div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                        <p className="text-sm opacity-80">McDonald's East London</p>
                        <h3 className="text-lg font-bold">First Order Discount</h3>
                    </div>
                    <div
                        className="absolute bottom-4 right-4 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xl">
                        +</div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img src="/images/vegan discount.png" className="w-full h-56 object-cover" />
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded">-20%</div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                        <p className="text-sm opacity-80">McDonald's East London</p>
                        <h3 className="text-lg font-bold">Vegan Discount</h3>
                    </div>
                    <div
                        className="absolute bottom-4 right-4 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xl">
                        +</div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img src="/images/free icecream.png" className="w-full h-56 object-cover" />
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded">-100%</div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                        <p className="text-sm opacity-80">McDonald's East London</p>
                        <h3 className="text-lg font-bold">Free Ice Cream Offer</h3>
                    </div>
                    <div
                        className="absolute bottom-4 right-4 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xl">
                        +</div>
                </div>

            </div>
        </section>
    )
}

export default Offers