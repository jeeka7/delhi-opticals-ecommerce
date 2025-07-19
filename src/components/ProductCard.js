// src/components/ProductCard.js
import React, { useContext } from 'react';
import AppContext from './AppContext'; // Import AppContext

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-200">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-100"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/E0F2F7/2C3E50?text=${encodeURIComponent(product.name)}`; }}
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
