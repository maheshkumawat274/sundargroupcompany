import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BranchLanding from './pages/BranchLanding';
import Navbar from './components/header/Navbar';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import BlogMainPage from './pages/blog';
import BlogDetailsPage from './pages/blog/BlogDetailsPage';
import Footer from './components/footer/Footer';
import ScrollTop from './components/ScrollTop';

const App: React.FC = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<BlogMainPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/branch/:slug" element={<BranchLanding />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;