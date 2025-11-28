import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BranchLanding from './pages/BranchLanding';
import Navbar from './components/header/Navbar';
import Home from './pages/Home.';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branch/:slug" element={<BranchLanding />} />
      </Routes>
    </div>
  );
};

export default App;