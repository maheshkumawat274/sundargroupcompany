import React, { useState } from 'react';
import type { Product } from './types';
import { useCart } from './contextprint/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCardPrint: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist, isInCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* New Badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
            NEW
          </span>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-medium px-2 py-1 rounded">
            -{discount}%
          </span>
        )}

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-colors ${
                isInCart(product.id)
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-900 hover:bg-rose-600 hover:text-white'
              }`}
            >
              {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => addToWishlist(product)}
              className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                isInWishlist(product.id)
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-gray-700 hover:text-rose-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardPrint;
