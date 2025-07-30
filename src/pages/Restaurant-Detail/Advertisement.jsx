import React from 'react'

function Advertisement() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">

            <div className="bg-[#0B0D19] h-[400px] text-white rounded-xl overflow-hidden flex shadow-lg relative">

                <div className="p-6 mt-[150px] flex-1">
                    <p className="text-sm text-gray-400 mb-2">I'm lovin' it!</p>
                    <h2 className="text-3xl font-bold mb-6">McDonald’s East London</h2>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full">
                            <img src="/images//Order Completed.png" alt=""/>
                                <span className="text-sm">Minimum Order: 12 GBP</span>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full">
                            <img src="/images//Forward Button.png" alt=""/>
                                <span className="text-sm">Delivery in 20–25 Minutes</span>
                        </div>
                    </div>

                    <div className="absolute bottom-0  left-0 bg-orange-500 px-4 py-1 rounded-tr-lg text-sm">
                        ⏰ Open until 3:00 AM
                    </div>
                </div>
                <div className="relative ">
                    <img src="/images/mcd burger.png" alt="Burger Image"
                        className="object-cover h-[250px] relative right-20 top-16 w-[350px]  rounded-xl" />


                    <div
                        className="absolute bottom-14 w-[100px] right-[400px] bg-white text-black p-2 px-3 rounded-md shadow-lg text-center">
                        <div className="text-2xl font-bold">3.4</div>
                        <div className="text-yellow-500 text-sm">★★★★☆</div>
                        <div className="text-gray-600 text-xs">1,360 reviews</div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Advertisement