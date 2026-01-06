import React from 'react';

const JustLaunchedPrint: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://assets0.mirraw.com/images/9985955/BNNAK-1709_zoom.jpg?1645171399"
                alt="Just Launched Collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Just Launched
            </div>
          </div>

          {/* Content */}
          <div className="py-8">
            <span className="text-rose-600 font-medium text-sm uppercase tracking-wider">
              New Collection 2024
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Exclusive Designer Prints
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Introducing our latest collection of meticulously crafted sarees featuring innovative print designs. 
              Each piece is a masterpiece that combines traditional artistry with contemporary aesthetics. 
              Our new collection showcases vibrant colors, intricate patterns, and premium quality fabrics 
              that elevate your style quotient.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Premium Quality Fabrics
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Exclusive Print Designs
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Handcrafted with Precision
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Color-Fast Technology
              </li>
            </ul>
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Shop New Arrivals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustLaunchedPrint;
