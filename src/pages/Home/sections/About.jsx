import {Heart, ShoppingCart, Star} from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">О BikeShop</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем лучшие велосипеды от ведущих мировых брендов с гарантией качества и профессиональным сервисом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">Качество</h3>
            <p className="text-gray-600">Только проверенные бренды и высококачественные материалы</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">Сервис</h3>
            <p className="text-gray-600">Профессиональная поддержка и быстрая доставка</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">Опыт</h3>
            <p className="text-gray-600">Более 10 лет на рынке велосипедов</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;