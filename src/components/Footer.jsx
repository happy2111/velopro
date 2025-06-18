import React from "react";
import ThemeToggle from "./ThemeToggle";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer className="bg-white text-black py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-8">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BikeShop</h3>
            <p className="text-gray-400 mb-4">
              Лучшие велосипеды для всех видов катания. Качество, которому можно доверять.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Горные велосипеды</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Шоссейные велосипеды</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Городские велосипеды</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Электровелосипеды</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Служба поддержки</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Доставка и возврат</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Гарантия</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Телефон: +7 (123) 456-78-90</li>
              <li>Email: info@bikeshop.com</li>
              <li>Адрес: г. Ташкент, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BikeShop. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;