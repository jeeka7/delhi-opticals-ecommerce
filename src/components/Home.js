// src/components/Home.js
import React, { useContext } from 'react';
import AppContext from './AppContext'; // Import AppContext

const Home = () => {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <section className="container mx-auto p-6 text-center min-h-[70vh] flex flex-col justify-center items-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Your Vision, Our Priority
      </h2>
      <p className="text-xl text-gray-700 mb-10 max-w-3xl">
        Discover a wide range of high-quality glasses, spectacles, lenses, and accessories.
        Experience clear vision and stylish designs, delivered right to your doorstep in Delhi.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={() => setCurrentPage('products')}
          className="bg-blue-600 text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Shop Now
        </button>
        <button
          onClick={() => setCurrentPage('cart')}
          className="bg-green-500 text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Cart
        </button>
      </div>
    </section>
  );
};

export default Home;
