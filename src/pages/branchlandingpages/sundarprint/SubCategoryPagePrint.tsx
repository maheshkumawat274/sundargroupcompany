import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  getProductsBySubCategory,
  getSubCategoriesForMainCategory
} from '../../../components/branchlandingpage/sundarprint/dataproductprint/printproductsdata';
import ProductCardPrint from '../../../components/branchlandingpage/sundarprint/ProductCardPrint';
import HeaderPrint from '../../../components/branchlandingpage/sundarprint/HeaderPrint';

const SubCategoryPagePrint: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryParam = queryParams.get('subCategory');
  
  // सभी sub-categories
  const subCategories = getSubCategoriesForMainCategory(categorySlug || '');
  
  // Initialize with query param or first sub-category
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(() => {
    if (subCategoryParam) return subCategoryParam;
    if (subCategories.length > 0) return subCategories[0];
    return '';
  });

  // Selected sub-category के products
  const products = useMemo(() => {
    if (!categorySlug || !selectedSubCategory) return [];
    return getProductsBySubCategory(categorySlug, selectedSubCategory);
  }, [categorySlug, selectedSubCategory]);

  // Main category name (breadcrumb के लिए)
  const getMainCategoryName = () => {
    // यहाँ आपको main category name hardcode करना पड़ सकता है या API से fetch करना पड़ सकता है
    const categoryMap: Record<string, string> = {
      'casual-wear': 'Casual Wear',
      'daily-wear': 'Daily Wear', 
      'party-wear': 'Party Wear',
      'bandhani-wear': 'Bandhani Wear'
    };
    return categoryMap[categorySlug || ''] || 'Category';
  };

  const mainCategoryName = getMainCategoryName();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, selectedSubCategory]);

  if (!categorySlug) {
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

  // अगर कोई sub-category नहीं है
  if (subCategories.length === 0) {
    return (
      <>
        <HeaderPrint/>
        <div className="bg-gray-50 min-h-screen py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No sub-categories found for this category.</p>
              <Link
                to="/branch/sundar-print"
                className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // अगर कोई sub-category select नहीं है
  if (!selectedSubCategory) {
    return null;
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
            <Link to="/branch/sundar-print" className="hover:text-rose-600 transition-colors">Sundar Print</Link>
            <span>/</span>
            <Link 
              to={`/branch/sundar-print/category/${categorySlug}`} 
              className="hover:text-rose-600 transition-colors"
            >
              {mainCategoryName}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{selectedSubCategory}</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedSubCategory}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our exclusive collection of {selectedSubCategory}, featuring premium designs and quality craftsmanship.
            </p>
          </div>

          {/* Sub-category Tabs (Horizontal) */}
          <div className="mb-10">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-2 min-w-max">
                {subCategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => setSelectedSubCategory(subCat)}
                    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
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
          </div>

          {/* Products Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{products.length}</span> products in "{selectedSubCategory}"
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
                No products found in "{selectedSubCategory}"
              </p>
              {/* Other sub-categories के लिए buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                {subCategories
                  .filter(subCat => subCat !== selectedSubCategory)
                  .map((subCat) => (
                    <button
                      key={subCat}
                      onClick={() => setSelectedSubCategory(subCat)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      View {subCat}
                    </button>
                  ))
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubCategoryPagePrint;