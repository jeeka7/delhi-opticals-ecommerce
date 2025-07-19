// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12 rounded-t-xl">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Delhi Opticals</p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Designed with <span className="text-red-400">❤️</span> for clear vision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
