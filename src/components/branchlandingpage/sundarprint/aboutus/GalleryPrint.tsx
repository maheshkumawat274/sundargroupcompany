import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Sarees', 'Cotton', 'Silk', 'Custom Prints'];

const items = [
  { id: 1, category: 'Sarees', img: 'https://images.unsplash.com/photo-1610030469668-874229b359f1?q=80&w=800&auto=format&fit=crop' },
  { id: 2, category: 'Cotton', img: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=800&auto=format&fit=crop' },
  { id: 3, category: 'Silk', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' },
  { id: 4, category: 'Custom Prints', img: 'https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?q=80&w=800&auto=format&fit=crop' },
  { id: 5, category: 'Sarees', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e4?q=80&w=800&auto=format&fit=crop' },
  { id: 6, category: 'Silk', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' },
];

export const GalleryPrint = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FDFCF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4">Design Portfolio</h3>
          <h2 className="text-4xl font-serif text-gray-900 font-bold">Inspiration in Motion</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#AC7C30] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#AC7C30]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-md group"
              >
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#AC7C30]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl border-b-2 border-amber-500 pb-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
