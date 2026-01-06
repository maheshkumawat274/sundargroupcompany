import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from '../../../components/branchlandingpage/sundarprint/dataproductprint/printproductsdata';
import ProductCardPrint from '../../../components/branchlandingpage/sundarprint/ProductCardPrint';
import HeaderPrint from '../../../components/branchlandingpage/sundarprint/HeaderPrint';

const CategoryPagePrint: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, categoryName } = getProductsByCategory(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!categoryName) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h2>
        <p className="text-gray-600 mb-8">The category you are looking for does not exist.</p>
        <Link
          to="/branch/sundar-print"
          className="px-8 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <> 
    <HeaderPrint/>
     <div className="bg-gray-50 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{categoryName}</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{categoryName}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exclusive collection of {categoryName}, featuring premium designs and quality craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <ProductCardPrint key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CategoryPagePrint;