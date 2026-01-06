import React from 'react';

const HeroPrint: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&h=1080&fit=crop"
          alt="Saree Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-rose-400">Sundar</span> Print
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Discover the finest collection of printed sarees crafted with precision and passion. 
            Each piece tells a story of elegance, tradition, and contemporary design. 
            Experience premium quality fabrics with exquisite prints that make every occasion special.
          </p>
          <a
            href="#categories"
            className="inline-block px-8 py-4 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition-colors text-lg"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPrint;
