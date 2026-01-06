
import { AboutPrint } from "../../../components/branchlandingpage/sundarprint/AboutPrint"
import CategoriesPrint from "../../../components/branchlandingpage/sundarprint/CategoriesPrint"
import { brassoSarees, chiffonSarees, fancyPrintSarees, georgetteSarees, weightlessSarees } from "../../../components/branchlandingpage/sundarprint/dataproductprint/printproductsdata"
import HeaderPrint from "../../../components/branchlandingpage/sundarprint/HeaderPrint"
import HeroPrint from "../../../components/branchlandingpage/sundarprint/HeroPrint"
import HorizontalScrollSectionPrint from "../../../components/branchlandingpage/sundarprint/HorizonatlSectionPrint"
import JustLaunchedPrint from "../../../components/branchlandingpage/sundarprint/JustLaunchedPrint"
import SwarovskiGridSection from "../../../components/branchlandingpage/sundarprint/SwarovskiGridSection"


const SundarPrintPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <HeaderPrint />
        <main>
          <HeroPrint />
          <CategoriesPrint />
          
          {/* Brasso Saree Section */}
          <div id="products">
            <HorizontalScrollSectionPrint title="Brasso Saree" products={brassoSarees} />
          </div>
          
          {/* Georgette Jaquard Section */}
          <div className="bg-gray-50">
            <HorizontalScrollSectionPrint title="Georgette Jaquard Saree" products={georgetteSarees} />
          </div>
          
          {/* Weightless Saree Section */}
          <HorizontalScrollSectionPrint title="Weightless Saree" products={weightlessSarees} />
          
          {/* Just Launched Section */}
          <JustLaunchedPrint />
          
          {/* Fancy Print Section */}
          <div className="bg-gray-50">
            <HorizontalScrollSectionPrint title="Fancy Print Saree" products={fancyPrintSarees} />
          </div>
          
          {/* Swarovski Work Section - Grid Layout */}
          <SwarovskiGridSection />
          
          {/* 40x40 Chiffon Saree Section */}
          <HorizontalScrollSectionPrint title="40×40 Chiffon Saree" products={chiffonSarees} />
          
          {/* About Section */}
          <AboutPrint/>
        </main>
      </div>
    </>
  )
}

export default SundarPrintPage