// src/components/ProductList.js
import React, { useContext } from 'react';
import AppContext from './AppContext'; // Import AppContext
import ProductCard from './ProductCard'; // Import ProductCard

const ProductList = () => {
  const { products } = useContext(AppContext);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
