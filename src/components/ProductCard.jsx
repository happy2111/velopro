import React, {useState} from "react";
import { Star, Heart } from 'lucide-react';



const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-600 cursor-pointer" />
        </div>
        <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>

        <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        <div className="flex flex-col justify-between">
          <span className="text-2xl font-bold text-black">${product.price}</span>
          <div className="flex grow gap-2 mt-2">
            <button
              onClick={() => onViewDetails(product)}
              className="grow block py-2 border border-gray-300 text-black rounded-lg hover:border-black transition-colors duration-200"
            >
              Подробнее
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="grow py-2 block bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;