"use client"
import React from 'react';
import FoodCard from '@/components/FoodCard'; 
import { burgers, fries, coldDrinks } from '@/utils/items'; 

function Food() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4">
      <div className="max-w-7xl mx-auto space-y-12 py-8">
        {/* Burgers Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2">Burgers</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgers.map((burger) => (
              <FoodCard key={burger.id} item={burger} />
            ))}
          </div>
        </section>

        {/* Fries Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-6 border-b-2 border-orange-500 pb-2">Fries</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fries.map((fry) => (
              <FoodCard key={fry.id} item={fry} />
            ))}
          </div>
        </section>

        {/* Cold Drinks Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-6 border-b-2 border-orange-500 pb-2">Cold Drinks</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coldDrinks.map((drink) => (
              <FoodCard key={drink.id} item={drink} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Food;
