
import React, { useState } from 'react';
import { GALLERY_IMAGES } from './mockdataresort/resortmockdata';

interface GalleryPageProps {
  onBack: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack }) => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#fdfaf5] animate-in slide-in-from-right duration-500">
      {/* Header */}
      <nav className="bg-[#4a0404] text-white py-6 px-8 sticky top-0 z-50 flex items-center justify-between shadow-xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-[#c5a059] transition-colors"
        >
          <span>←</span> Back to Home
        </button>
        <div className="text-xl font-serif font-bold tracking-widest">
          SUNDAR <span className="text-[#c5a059]">GALLERY</span>
        </div>
        <div className="w-24"></div> {/* Spacer */}
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <span className="text-[#c5a059] font-cursive text-4xl mb-2 block">Our Album</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4a0404] mb-8">Capturing The Essence</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-[#4a0404] text-[#ecd399] shadow-lg' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-[#c5a059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, i) => (
            <div 
              key={i} 
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-xl"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-[#c5a059] text-xs font-bold uppercase tracking-[0.2em] mb-1">{img.category}</span>
                <h3 className="text-white font-serif text-2xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
            alt="Enlarged"
          />
        </div>
      )}

      {/* Footer Branding */}
      <div className="py-20 text-center bg-[#4a0404] mt-24">
        <div className="text-white text-2xl font-serif font-bold mb-4">
          SUNDAR <span className="text-[#c5a059]">RESORT</span>
        </div>
        <p className="text-[#ecd399]/60 text-xs uppercase tracking-[0.5em]">Every Image Tells A Story</p>
      </div>
    </div>
  );
};

export default GalleryPage;
