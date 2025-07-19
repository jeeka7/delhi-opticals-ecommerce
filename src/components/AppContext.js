// src/components/AppContext.js
import React, { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'products', 'cart', 'checkout'

  // Mock product data
  useEffect(() => {
    setProducts([
      {
        id: '1',
        name: 'Classic Aviator Glasses',
        category: 'Spectacles',
        price: 1200,
        imageUrl: 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Aviator',
        description: 'Timeless aviator design, perfect for a stylish look. Lightweight frame with comfortable fit.',
      },
      {
        id: '2',
        name: 'Blue Light Blocking Lenses',
        category: 'Lenses',
        price: 850,
        imageUrl: 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Blue+Light',
        description: 'Protect your eyes from digital strain with our premium blue light filtering lenses. Clear vision guaranteed.',
      },
      {
        id: '3',
        name: 'Sporty Reading Glasses',
        category: 'Spectacles',
        price: 950,
        imageUrl: 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Sporty',
        description: 'Durable and flexible reading glasses, ideal for active lifestyles. Available in various powers.',
      },
      {
        id: '4',
        name: 'Daily Disposable Lenses (30 Pack)',
        category: 'Lenses',
        price: 1500,
        imageUrl: 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Daily+Lenses',
        description: 'Convenient daily disposable contact lenses for fresh, clear vision every day.',
      },
      {
        id: '5',
        name: 'Lens Cleaning Solution (200ml)',
        category: 'Cleaning Solution',
        price: 250,
        imageUrl: 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Cleaner',
        description: 'Gentle and effective cleaning solution for all types of lenses and spectacles. Streak-free shine.',
      },
      {
        id: '6',
        name: 'Microfiber Cleaning Cloth',
        category: 'Accessories',
        price: 100,
        imageUrl: 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Cloth',
        description: 'Soft and lint-free microfiber cloth for safe and thorough cleaning of your eyewear.',
      },
    ]);
  }, []);

  // Add item to cart or increase quantity if already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update quantity of an item in cart
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Clear the cart after successful order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext; // Export the context itself
