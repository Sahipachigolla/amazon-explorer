import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain bg-gray-100"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
        <p className="text-blue-600 font-bold mt-2 text-sm">₹{product.price}</p>
        <p className="text-yellow-500 text-sm mt-1">⭐ {product.rating} / 5</p>
      </div>
    </div>
  );
};

export default ProductCard;
