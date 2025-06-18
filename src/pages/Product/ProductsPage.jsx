import React, {useState} from "react";
import {ChevronRight, Minus, Plus, Star} from "lucide-react";
import mockProducts from "../../Data.js";
import ProductCard from "../../components/ProductCard.jsx";
import {Search, Filter} from "lucide-react";


const ProductsPage = ({ onViewDetails, onAddToCart, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Mountain', 'Road', 'City', 'Electric'];


  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-black hover:text-red-600 transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5 rotate-180 mr-2" />
            Назад
          </button>
          <h1 className="text-3xl font-bold text-black">Каталог товаров</h1>
          <div></div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:border-black transition-colors duration-200"
              >
                <Filter className="h-5 w-5 mr-2" />
                Фильтры
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="name">По названию</option>
                <option value="price-low">Цена (низкая)</option>
                <option value="price-high">Цена (высокая)</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-black mb-4">Категории</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    {category === 'All' ? 'Все' : category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Товары не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductsPage;