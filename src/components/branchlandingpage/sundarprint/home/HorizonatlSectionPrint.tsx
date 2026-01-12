import React from 'react';
import type { Product } from '../types';
import ProductCardPrint from '../ProductCardPrint';
import { Link } from 'react-router-dom';

interface HorizontalScrollSectionProps {
  title: string;
  products: Product[];
  categorySlug: string;
  subCategoryName?: string; // Optional: specific sub-category
}

const HorizontalScrollSectionPrint: React.FC<HorizontalScrollSectionProps> = ({
  title,
  products,
  categorySlug,
  subCategoryName,
}) => {
  // Get the most common sub-category from products if not provided
  const actualSubCategory = subCategoryName || 
    (products.length > 0 ? products[0].category : '');

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCardPrint key={product.id} product={product} />
          ))}
        </div>

        {/* VIEW MORE */}
        <div className="mt-10 text-center">
          <Link
            to={`/branch/sundar-print/category/${categorySlug}${actualSubCategory ? `?subCategory=${actualSubCategory}` : ''}`}
            className="inline-block px-8 py-3 border border-rose-600 text-rose-600 font-semibold rounded-full
                       hover:bg-rose-600 hover:text-white transition-all"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSectionPrint;