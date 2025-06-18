import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, Menu, X, Star, ChevronRight, Heart, Plus, Minus, Moon, Sun } from 'lucide-react';
import About from "./pages/Home/sections/About.jsx";
import Hero from "./pages/Home/sections/Hero.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Footer from "./components/Footer.jsx";
import ProductsPage from "./pages/Product/ProductsPage.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";


// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleShowMore = () => {
    setCurrentPage('products');
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">


      <Navbar cartCount={cartCount} toggleCart={() => setIsCartOpen(!isCartOpen)} theme={theme} toggleTheme={toggleTheme} />

      {currentPage === 'home' && (
        <>
          <Hero />
          <About />
          <ProductsSection
            onShowMore={handleShowMore}
            onViewDetails={handleViewDetails}
            onAddToCart={handleAddToCart}
          />
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </>
      )}

      {currentPage === 'products' && (
        <>
          <ProductsPage
            onViewDetails={handleViewDetails}
            onAddToCart={handleAddToCart}
            onBack={handleBackToHome}
          />
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </>
      )}

      {currentPage === 'detail' && selectedProduct && (
        <>
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackToProducts}
            onAddToCart={handleAddToCart}
          />
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </>
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;
