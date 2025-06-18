import {useState} from "react";
import {ChevronRight} from "lucide-react";
import mockProducts from "../Data.js";
import ProductCard from "./ProductCard.jsx";


const ProductsSection = ({ onShowMore, onViewDetails, onAddToCart }) => {
  const featuredProducts = mockProducts.slice(0, 3);

  return (
    <div id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Популярные товары</h2>
          <p className="text-xl text-gray-600">Лучшие велосипеды в нашем каталоге</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onShowMore}
            className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
          >
            Показать больше
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductsSection;