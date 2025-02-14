import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="p-4 text-center">
        <h3 className="text-[#1A0B5B] font-semibold">{product.title}</h3>
        <p className="text-gray-600">Code - {product.id}</p>
        <p className="text-black font-bold">${product.price}</p>
      </div>
    </div>
  );
}
