
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-rose-100 hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
              {product.badge}
            </span>
          </div>
        )}

        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-600 hover:bg-white transition-all shadow-sm">
          <Heart size={18} />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full py-3 bg-white text-rose-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-rose-50 transition-colors"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{product.category}</p>
        <h3 className="text-lg font-bold text-slate-800 mb-2 truncate group-hover:text-rose-900 transition-colors">{product.name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-rose-700">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
