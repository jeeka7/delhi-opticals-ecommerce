// src/App.js
import React, { useContext } from 'react';
import AppContext from './components/AppContext'; // Import AppContext
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

// This component now holds the core UI logic and consumes the context
const MainApplication = () => {
  const { currentPage } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex flex-col">
      {/* Inter font for a soothing look - loaded via link tag */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #F8FAFC; /* Light background */
          }
        `}
      </style>

      <Header />

      <main className="flex-grow">
        {/* Conditional rendering based on currentPage */}
        {currentPage === 'home' && <Home />}
        {currentPage === 'products' && <ProductList />}
        {currentPage === 'cart' && <Cart />}
        {currentPage === 'checkout' && <Checkout />}
      </main>

      <Footer />
    </div>
  );
};

// Root Component (Default Export)
// This component wraps the MainApplication with the AppProvider
export default function App() {
  // AppProvider is imported and used in index.js to wrap the entire App
  // This App component itself will be wrapped by AppProvider in index.js
  return <MainApplication />;
}
