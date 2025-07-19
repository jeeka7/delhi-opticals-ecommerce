// src/components/Checkout.js
import React, { useState, useContext } from 'react';
import AppContext from './AppContext'; // Import AppContext
import { CheckCircleIcon } from '../icons/Icons'; // Import CheckCircleIcon

const Checkout = () => {
  const { cart, clearCart, setCurrentPage } = useContext(AppContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for custom modal

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      // Use custom modal instead of alert
      setShowModal(true);
      return;
    }
    // Simulate order placement
    console.log('Order Details:', {
      customerInfo,
      cart,
      total,
    });
    setOrderPlaced(true);
    clearCart(); // Clear cart after order is "placed"
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (orderPlaced) {
    return (
      <section className="container mx-auto p-6 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <CheckCircleIcon className="w-24 h-24 text-green-500 mb-6 animate-bounce" />
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Order Placed Successfully!</h2>
        <p className="text-xl text-gray-700 mb-6">
          Thank you for your purchase. Your bill will be sent to your WhatsApp number shortly.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100 max-w-lg mx-auto mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Next Steps:</h3>
          <p className="text-gray-700 text-left mb-2">
            1. We will contact you on WhatsApp at <span className="font-semibold">{customerInfo.phone || 'your provided number'}</span> with your digital bill.
          </p>
          <p className="text-gray-700 text-left">
            2. You can then make the payment via UPI to the number provided in the WhatsApp message.
          </p>
        </div>
        <button
          onClick={() => setCurrentPage('home')}
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Checkout</h2>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Cart Empty!</h3>
            <p className="text-gray-700 mb-6">Please add items to your cart before proceeding to checkout.</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Information Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Information</h3>
          <form onSubmit={handleSubmitOrder} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
                Delivery Address
              </label>
              <textarea
                id="address"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                WhatsApp Number (for bill)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
                pattern="[0-9]{10}" // Basic 10-digit phone number validation
                title="Please enter a 10-digit phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Place Order & Pay via UPI
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100 h-fit">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h3>
          <div className="space-y-3 text-lg text-gray-700 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-gray-300 pt-4">
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
          <p className="text-sm text-gray-600 italic">
            * Upon placing the order, a digital bill will be sent to your provided WhatsApp number with UPI payment details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
