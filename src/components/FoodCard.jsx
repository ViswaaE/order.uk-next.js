// FoodCard.js
// This file defines the reusable FoodCard component.
import React from 'react';

const FoodCard = ({ item }) => {
  const { imageSrc, title, description, price } = item;

  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4">
      <img
        src={imageSrc}
        className="w-20 h-20 rounded object-cover"
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/80x80/cccccc/000000?text=No+Img';
        }}
      />
      <div className="flex-1">
        <h4 className="font-bold text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold">GBP {price.toFixed(2)}</span>
          <button
            className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-sm hover:bg-gray-800 transition-colors duration-200"
            aria-label={`Add ${title} to cart`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;