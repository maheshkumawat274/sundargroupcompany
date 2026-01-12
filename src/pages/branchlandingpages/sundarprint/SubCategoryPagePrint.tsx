import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  getProductsByMainCategory,
  getProductsBySubCategory,
  categories,
  getSubCategoriesForMainCategory
} from '../../../components/branchlandingpage/sundarprint/dataproductprint/printproductsdata';
import ProductCardPrint from '../../../components/branchlandingpage/sundarprint/ProductCardPrint';
import HeaderPrint from '../../../components/branchlandingpage/sundarprint/HeaderPrint';

const SubCategoryPagePrint: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryParam = queryParams.get('subCategory');
  
  const [selectedSubCategory, setSelectedSubCategory] = React.useState<string>(subCategoryParam || 'all');

  const products = useMemo(() => {
    if (!categorySlug) return [];
    if (selectedSubCategory === 'all') {
      return getProductsByMainCategory(categorySlug);
    }
    return getProductsBySubCategory(categorySlug, selectedSubCategory);
  }, [categorySlug, selectedSubCategory]);
  
  const mainCategory = categories.find(c => c.slug === categorySlug);
  const subCategories = getSubCategoriesForMainCategory(categorySlug || '');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!mainCategory) {
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

  // Find the current sub-category name
  const currentSubCategoryName = selectedSubCategory === 'all' 
    ? mainCategory.name 
    : selectedSubCategory;

  return (
    <> 
      <HeaderPrint/>
      <div className="bg-gray-50 min-h-screen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/branch/sundar-print" className="hover:text-rose-600 transition-colors">Sundar Print</Link>
            <span>/</span>
            <Link to={`/branch/sundar-print/category/${categorySlug}`} className="hover:text-rose-600 transition-colors">
              {mainCategory.name}
            </Link>
            {selectedSubCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-gray-900 font-medium">{selectedSubCategory}</span>
              </>
            )}
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentSubCategoryName}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our exclusive collection of {currentSubCategoryName}, featuring premium designs and quality craftsmanship.
            </p>
          </div>

          {/* Sub-category Filters */}
          {subCategories.length > 0 && (
            <div className="mb-10">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedSubCategory('all')}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedSubCategory === 'all'
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-rose-600 hover:text-rose-600'
                  }`}
                >
                  All {mainCategory.name}
                </button>
                {subCategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => setSelectedSubCategory(subCat)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      selectedSubCategory === subCat
                        ? 'bg-rose-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-rose-600 hover:text-rose-600'
                    }`}
                  >
                    {subCat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Count */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{products.length}</span> products
              {selectedSubCategory !== 'all' && ` in "${selectedSubCategory}"`}
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
              <p className="text-gray-500 text-lg mb-4">
                {selectedSubCategory !== 'all' 
                  ? `No products found in "${selectedSubCategory}"`
                  : `No products found in "${mainCategory.name}"`
                }
              </p>
              {selectedSubCategory !== 'all' && (
                <button
                  onClick={() => setSelectedSubCategory('all')}
                  className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                >
                  View All Products in {mainCategory.name}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubCategoryPagePrint;