import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import BlogMainPage from './pages/blog';
import BlogDetailsPage from './pages/blog/BlogDetailsPage';
import Footer from './components/footer/Footer';
import ScrollTop from './components/ScrollTop';
import ResortServicesPage from './components/branchlandingpage/sundarresort/services/ResortServicesPage';
import ResortServiceLandingPage from './components/branchlandingpage/sundarresort/services/ResortServicesLandingpage';
import StrategySection from './components/home/OurStrategy/StrategySection';
import StrategyDetail from './components/home/OurStrategy/StrategyDetail';
import { BranchLandingPage } from './pages/branchlandingpages/BranchLandingpage';
import ServicesPage from './pages/services';
import VenturesPage from './pages/ventures';
import ImpactPage from './pages/impact';
import ContactPage from './pages/contact';
import FloatingSocialIcons from './components/FloatingBtn';
import FloatingWhatsappButton from './components/FloatingWPbtn';
import SundarResortPage from './pages/branchlandingpages/sundarresort';
import SundarPrintPage from './pages/branchlandingpages/sundarprint';
import SundarDeveloperPage from './pages/branchlandingpages/sundardeveloper';
import CategoryPagePrint from './pages/branchlandingpages/sundarprint/categoriespage';
import { CartProvider } from './components/branchlandingpage/sundarprint/contextprint/ContextPrint';
import ContactusPrintPage from './pages/branchlandingpages/sundarprint/ContactusPrintPage';
import Aboutprintpage from './pages/branchlandingpages/sundarprint/aboutprintpage';
import LeadershipSection from './components/home/leadership/LeaderShipSection';
import LeaderShipDetail from './components/home/leadership/LeadershipDetail';
import { AuthProvider } from './components/branchlandingpage/sundarprint/context/AuthContext';
import WholesalerRegister from './components/branchlandingpage/sundarprint/account/WholeRegister';
import WholesalerLogin from './components/branchlandingpage/sundarprint/account/Wholesallerlogin';
import ForgotPassword from './components/branchlandingpage/sundarprint/account/ForgetPassword';
import UserDashboard from './pages/branchlandingpages/sundarprint/user/UserDashboard';
import LikedProducts from './pages/branchlandingpages/sundarprint/user/LikeProduct';
import Cart from './pages/branchlandingpages/sundarprint/user/Cart';
import Orders from './pages/branchlandingpages/sundarprint/user/Order';
import Payments from './pages/branchlandingpages/sundarprint/user/Histroy';

const App: React.FC = () => {
  return (
    <div>
       <AuthProvider>
      <CartProvider>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<AboutPage />} />
        <Route path='/what-we-build' element={<ServicesPage />} />
        <Route path='/ventures' element={<VenturesPage />} />
        <Route path='/impact' element={<ImpactPage />} />
        <Route path="/blogs" element={<BlogMainPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        {/* Strategy Section routes */}
        <Route path="/our-strategy" element={<StrategySection />} />
        <Route path="/our-strategy/:id" element={<StrategyDetail />} />
        {/* leadership section routes */}
        <Route path="/leadership" element={<LeadershipSection />} />
        <Route path="/leadership/:slug" element={<LeaderShipDetail />} />
        {/* Branch routes */}
        <Route path="/branch/:slug" element={<BranchLandingPage />} />
        <Route path='/branch/sundar-resort' element={<SundarResortPage/>}/>
        <Route path='/branch/sundar-print' element={<SundarPrintPage/>}/>
        <Route path="/branch/sundar-print/about-us" element={<Aboutprintpage />} />
        <Route path="/branch/sundar-print/contact-us" element={<ContactusPrintPage />} />
          {/* sundar print categories route */}
          <Route path="/category/:slug" element={<CategoryPagePrint />} />
          
        <Route path='/branch/sundar-developer' element={<SundarDeveloperPage/>}/>
        {/* Resort Services routes */}
        <Route path="/branch/sundar-resort/services" element={<ResortServicesPage />} />
        <Route path="/branch/sundar-resort/services/:serviceSlug" element={<ResortServiceLandingPage />} />
        {/* user account */}
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/liked" element={<LikedProducts />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/orders" element={<Orders />} />
        <Route path="/user/payments" element={<Payments/>} />
        <Route path="/branch/sundar-print/wholesaler/register" element={<WholesalerRegister />} />
        <Route path="/branch/sundar-print/wholesaler/login" element={<WholesalerLogin />} />
        <Route path="/branch/sundar-print/wholesaler/forgot-password" element={<ForgotPassword />} />

      </Routes>
      <Footer/>
      <FloatingSocialIcons/>
      <FloatingWhatsappButton/>
      
      </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;