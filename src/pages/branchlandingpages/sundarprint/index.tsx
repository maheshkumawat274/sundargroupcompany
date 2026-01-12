import CategoriesPrint from "../../../components/branchlandingpage/sundarprint/home/CategoriesPrint"
import { brassoSarees, chiffonSarees, fancyPrintSarees, georgetteSarees, weightlessSarees } from "../../../components/branchlandingpage/sundarprint/dataproductprint/printproductsdata"
import HeaderPrint from "../../../components/branchlandingpage/sundarprint/HeaderPrint"
import HeroPrint from "../../../components/branchlandingpage/sundarprint/home/HeroPrint"
import JustLaunchedPrint from "../../../components/branchlandingpage/sundarprint/home/JustLaunchedPrint"
import SwarovskiGridSection from "../../../components/branchlandingpage/sundarprint/home/SwarovskiGridSection"
import HorizontalScrollSectionPrint from "../../../components/branchlandingpage/sundarprint/home/HorizonatlSectionPrint"

const SundarPrintPage = () => {
  
  return (
    <>
      <div className="min-h-screen bg-white">
        <HeaderPrint />
        <main className="mt-16 md:mt-20">
          <HeroPrint />
          <CategoriesPrint />
          
          {/* Brasso Saree Section */}
          <div id="products">
            <HorizontalScrollSectionPrint 
              title="Brasso Saree" 
              products={brassoSarees} 
              categorySlug="casual-wear"
            />
          </div>
          
          {/* Georgette Jaquard Section */}
          <div className="bg-gray-50">
            <HorizontalScrollSectionPrint 
              title="Georgette Jaquard Saree" 
              products={georgetteSarees} 
              categorySlug="casual-wear"
            />
          </div>
          
          {/* Weightless Saree Section */}
          <HorizontalScrollSectionPrint 
            title="Weightless Saree" 
            products={weightlessSarees} 
            categorySlug="casual-wear"
          />
          
          {/* Just Launched Section */}
          <JustLaunchedPrint />
          
          {/* Fancy Print Section */}
          <div className="bg-gray-50">
            <HorizontalScrollSectionPrint 
              title="Fancy Print Saree" 
              products={fancyPrintSarees} 
              categorySlug="daily-wear"
            />
          </div>
          
          {/* Swarovski Work Section - Grid Layout */}
          <SwarovskiGridSection />
          
          {/* 40x40 Chiffon Saree Section */}
          <HorizontalScrollSectionPrint 
            title="40×40 Chiffon Saree" 
            products={chiffonSarees} 
            categorySlug="daily-wear"
          />
        </main>
      </div>
    </>
  )
}

export default SundarPrintPage