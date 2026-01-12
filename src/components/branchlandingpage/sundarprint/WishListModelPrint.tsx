import React from 'react';
import { useCart } from './contextprint/useCart';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.helpers';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Wishlist</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p>Your wishlist is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
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

                      {/* 🔐 PRICE OR LOGIN */}
                      {isLoggedIn ? (
                        <p className="text-sm font-semibold text-gray-900 mt-2">
                          ₹{item.price.toLocaleString()}
                        </p>
                      ) : (
                        <button
                          onClick={() => {
                            onClose();
                            navigate('/login');
                          }}
                          className="mt-2 text-xs px-3 py-1 border border-rose-600
                                     text-rose-600 rounded-full hover:bg-rose-600
                                     hover:text-white transition"
                        >
                          Login to see price
                        </button>
                      )}

                      {/* MOVE TO CART */}
                      {isLoggedIn && (
                        <button
                          onClick={() => {
                            addToCart(item);
                            removeFromWishlist(item.id);
                          }}
                          className="mt-3 px-4 py-1.5 text-xs font-medium
                                     bg-rose-600 text-white rounded
                                     hover:bg-rose-700 transition"
                        >
                          Move to Cart
                        </button>
                      )}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-1 text-gray-400 hover:text-rose-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
