// src/components/Cart.js
import React, { useContext } from 'react';
import AppContext from './AppContext'; // Import AppContext
import { XIcon } from '../icons/Icons'; // Import XIcon

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, setCurrentPage } = useContext(AppContext);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0; // Simple shipping logic
  const total = subtotal + shipping;

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-xl p-10 bg-white rounded-xl shadow-md">
          Your cart is empty. Start adding some amazing products!
          <button
            onClick={() => setCurrentPage('products')}
            className="mt-6 block mx-auto bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/E0F2F7/2C3E50?text=${encodeURIComponent(item.name)}`; }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border border-gray-300 rounded-md py-1 px-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-300 p-2 rounded-full hover:bg-red-50"
                  >
                    <XIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-semibold">₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4 text-xl font-bold text-gray-900">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('checkout')}
              className="mt-8 w-full bg-green-600 text-white py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
