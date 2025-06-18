import React, {useState} from "react";
import { ShoppingCart, Menu, X, Moon, Sun } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ cartCount, toggleCart, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <nav className="bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black dark:text-white">BikeShop</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200 font-medium">Главная</a>
              <a href="#about" className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200 font-medium">О нас</a>
              <a href="#products" className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200 font-medium">Товары</a>
              <a href="#contact" className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200 font-medium">Контакты</a>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={toggleCart}
              className="relative p-2 text-black dark:text-white hover:text-red-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black dark:text-white hover:text-red-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-950 border-t dark:border-neutral-800">
              <a href="#home" className="block px-3 py-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200">Главная</a>
              <a href="#about" className="block px-3 py-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200">О нас</a>
              <a href="#products" className="block px-3 py-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200">Товары</a>
              <a href="#contact" className="block px-3 py-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors duration-200">Контакты</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;