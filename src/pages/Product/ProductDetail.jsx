import {Minus, Plus, X} from "lucide-react";
import React, { useState} from "react";
import mockProducts from "../../Data.js";
import ProductCard from "../../components/ProductCard.jsx";
import { Star, ChevronRight } from "lucide-react";


const ProductDetail = ({ product, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = mockProducts.filter(p => p.id !== product.id && p.category === product.category);

  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-black hover:text-red-600 transition-colors duration-200 mb-8"
        >
          <ChevronRight className="h-5 w-5 rotate-180 mr-2" />
          Назад к каталогу
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({product.reviews} отзывов)</span>
            </div>

            <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">Особенности:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mb-8">
              <span className="text-3xl font-bold text-black mr-6">${product.price}</span>

              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 px-6 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Добавить в корзину
              </button>
              <button className="flex-1 px-6 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Купить сейчас
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onViewDetails={() => {}}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;