import React, { useState } from "react";
import type { Product } from "./types";
import { useCart } from "./contextprint/useCart";
import QuickViewModal from "./QuickViewModal";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext.helpers";

interface ProductCardProps {
  product: Product;
}

const ProductCardPrint: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist, isInCart } = useCart();
  const { isLoggedIn } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // const discount = product.originalPrice
  //   ? Math.round(
  //       ((product.originalPrice - product.price) /
  //         product.originalPrice) *
  //         100
  //     )
  //   : 0;

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow h-full "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* BADGES */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}

        {/* {discount > 0 && (
          <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )} */}

        {/* HOVER ACTIONS */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="flex flex-col gap-3">
              {/* QUICK VIEW */}
              <button
                onClick={() => setIsQuickViewOpen(true)}
                className="px-6 py-2 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
              >
                Quick View
              </button>
            <button
              onClick={() => addToCart(product)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                isInCart(product.id)
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-900 hover:bg-rose-600 hover:text-white"
              }`}
            >
              {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
            </button>
            </div>

            <button
              onClick={() => addToWishlist(product)}
              className={`absolute top-3 right-3 p-2 rounded-full ${
                isInWishlist(product.id)
                  ? "bg-rose-600 text-white"
                  : "bg-white text-gray-700 hover:text-rose-600"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={isInWishlist(product.id) ? "currentColor" : "none"}
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

      {/* INFO */}
      <div className="p-2">
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        {/* PRICE – ONLY AFTER LOGIN */}
        {!isLoggedIn && (
          <div className="mt-4">
            <button className="w-full text-sm font-medium py-2.5 rounded-lg border hover:border-rose-600 text-white bg-rose-600 hover:bg-white hover:text-rose-600 transition">
              <Link
              to="/branch/sundar-print/wholesaler/register"
              onClick={() => {
                // TODO: later connect real auth route
                // navigate("/login");
                console.log("Redirect to Login / Register");
              }}
              
            >
              Login | Register to see wholesale price
            </Link>
            </button>
          </div>
        )}

      </div>
      {/* QUICK VIEW MODAL */}
      {isQuickViewOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setIsQuickViewOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductCardPrint;
