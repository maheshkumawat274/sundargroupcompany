import React, { useState } from 'react';
import { swarovskiSarees } from '../dataproductprint/printproductsdata';
import ProductCardPrint from '../ProductCardPrint';
const SwarovskiGridSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? swarovskiSarees : swarovskiSarees.slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Swarovski Work Saree</h2>
          <p className="text-gray-600 mt-2">Luxury sarees adorned with exquisite Swarovski crystals</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product) => (
            <ProductCardPrint key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        {!showAll && swarovskiSarees.length > 4 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              View More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              Show Less
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SwarovskiGridSection;
