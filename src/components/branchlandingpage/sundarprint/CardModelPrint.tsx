import React, { useState } from 'react';
import { useCart } from './contextprint/useCart';
import CheckoutModalPrint from './CheckOutPrint';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext.helpers';
// import { useAuth } from './contextprint/useAuth'; // agar alag auth context hai

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModalPrint: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const { isLoggedIn } = useAuth();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />

        {/* Modal */}
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="flex flex-col h-full">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Shopping Cart
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 py-4 border-b border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.category}
                        </p>

                        {/* 🔐 PRICE OR LOGIN BUTTON */}
                        {isLoggedIn ? (
                          <p className="text-sm font-semibold text-gray-900 mt-2">
                            ₹{item.price.toLocaleString()}
                          </p>
                        ) : (
                          <button
                            className="mt-2 text-xs px-3 py-1 border border-rose-600
                                       text-rose-600 rounded-full hover:bg-rose-600
                                       hover:text-white transition"
                          >
                            <Link to="/branch/sundar-print/wholesaler/login">Login to see price</Link>
                          </button>
                        )}

                        {/* Quantity */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 border rounded"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 border rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-rose-600"
                      >
                        🗑
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FOOTER */}
            {cartItems.length > 0 && isLoggedIn && (
              <div className="border-t border-gray-200 px-6 py-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">
                    ₹{cartTotal.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3 bg-rose-600 text-white rounded-lg
                             hover:bg-rose-700 transition"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CheckoutModalPrint
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};

export default CartModalPrint;
