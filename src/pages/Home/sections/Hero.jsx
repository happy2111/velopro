import React from "react";

const Hero = () => {
  return (
    <div id="home" className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Найди свой идеальный велосипед
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Качественные велосипеды для любых целей. От городских прогулок до экстремальных приключений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
                Посмотреть каталог
              </button>
              <button className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-200">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
              alt="Hero Bike"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-sm font-medium">Скидка до</p>
              <p className="text-2xl font-bold">30%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;