// src/components/Header.js
import React, { useContext } from 'react';
import AppContext from './AppContext'; // Import AppContext
import { HomeIcon, PackageIcon, ShoppingCartIcon } from '../icons/Icons'; // Import icons

const Header = () => {
  const { cart, setCurrentPage } = useContext(AppContext);
  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-blue-100 to-green-100 p-4 shadow-md rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-3xl font-bold text-gray-800 cursor-pointer transition-colors duration-300 hover:text-blue-600"
          onClick={() => setCurrentPage('home')}
        >
          Delhi Opticals
        </h1>
        <nav className="flex space-x-6">
          <button
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            onClick={() => setCurrentPage('home')}
          >
            <HomeIcon className="mr-1" /> Home
          </button>
          <button
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            onClick={() => setCurrentPage('products')}
          >
            <PackageIcon className="mr-1" /> Products
          </button>
          <button
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative"
            onClick={() => setCurrentPage('cart')}
          >
            <ShoppingCartIcon className="mr-1" /> Cart
            {totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
