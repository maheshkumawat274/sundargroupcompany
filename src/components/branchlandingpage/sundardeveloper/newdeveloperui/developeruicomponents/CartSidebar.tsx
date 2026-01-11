
import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col animate-fade-in origin-right">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-rose-50/50">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <ShoppingBag size={22} className="text-rose-700" />
            Your Shopping Bag
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-300">
                <ShoppingBag size={40} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Your bag is empty</h3>
                <p className="text-slate-500 text-sm mt-1">Looks like you haven't added anything to your cart yet.</p>
              </div>
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-rose-700 text-white font-bold rounded-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-800 line-clamp-1">{item.name}</h3>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-slate-300 hover:text-rose-600 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">{item.category}</p>
                    <p className="text-rose-700 font-bold mt-2">₹{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-slate-50 w-fit rounded-lg px-2 py-1 border border-slate-100">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:text-rose-600 disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:text-rose-600"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-slate-500 text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-slate-900 font-bold text-lg pt-2 border-t border-slate-200">
                <span>Total</span>
                <span className="text-rose-800 font-serif">₹{subtotal.toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full py-4 bg-rose-800 hover:bg-rose-900 text-white font-bold rounded-xl transition-all shadow-xl shadow-rose-900/10">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
