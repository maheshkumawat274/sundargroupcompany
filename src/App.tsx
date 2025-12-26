import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Navbar from './components/header/Navbar';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import BlogMainPage from './pages/blog';
import BlogDetailsPage from './pages/blog/BlogDetailsPage';
import Footer from './components/footer/Footer';
import ScrollTop from './components/ScrollTop';
import SundarResortPage from './pages/branchlandingpages/sundarresort';
import SundarDeveloperPage from './pages/branchlandingpages/sundardeveloper';
import SundarPrintPage from './pages/branchlandingpages/sundarprint';
import ResortServicesPage from './components/branchlandingpage/sundarresort/services/ResortServicesPage';
import ResortServiceLandingPage from './components/branchlandingpage/sundarresort/services/ResortServicesLandingpage';
import StrategySection from './components/home/OurStrategy/StrategySection';
import StrategyDetail from './components/home/OurStrategy/StrategyDetail';

const App: React.FC = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogMainPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* Strategy Section routes */}
        <Route path="/our-strategy" element={<StrategySection />} />
        <Route path="/our-strategy/:id" element={<StrategyDetail />} />
        {/* Branch routes */}
        <Route path="/branch/sundar-resort" element={<SundarResortPage />} />
        <Route path="/branch/sundar-print" element={<SundarPrintPage />} />
        <Route path="/branch/sundar-developer" element={<SundarDeveloperPage />} />
        {/* Resort Services routes */}
        <Route path="/branch/sundar-resort/services" element={<ResortServicesPage />} />
        <Route path="/branch/sundar-resort/services/:serviceSlug" element={<ResortServiceLandingPage />} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;