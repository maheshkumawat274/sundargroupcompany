import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './contextprint/useCart';
import CartModalPrint from './CardModelPrint';
import WishlistModal from './WishListModelPrint';

const HeaderPrint: React.FC = () => {
  const { cartCount, wishlistItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight block">
                <span className="text-rose-600">Sundar</span> Print
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {isHome ? (
                <>
                  <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-700 hover:text-rose-600 font-medium transition-colors cursor-pointer">
                    Home
                  </a>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-rose-600 font-medium transition-colors cursor-pointer">
                    About Us
                  </a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-700 hover:text-rose-600 font-medium transition-colors cursor-pointer">
                    Contact Us
                  </a>
                </>
              ) : (
                <>
                  <Link to="/branch/sundar-print" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                    Home
                  </Link>
                  <Link to="/branch/sundar-print/about-us" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                    About Us
                  </Link>
                  <Link to="/branch/sundar-print/contact-us" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                    Contact Us
                  </Link>
                </>
              )}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                {isHome ? (
                  <>
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-700 hover:text-rose-600 font-medium py-2">
                      Home
                    </a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-rose-600 font-medium py-2">
                      About Us
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-700 hover:text-rose-600 font-medium py-2">
                      Contact Us
                    </a>
                  </>
                ) : (
                  <>
                    <Link to="/branch/sundar-print" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-rose-600 font-medium py-2">
                      Home
                    </Link>
                    <Link to="/branch/sundar-print/about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-rose-600 font-medium py-2">
                      About Us
                    </Link>
                    <Link to="/branch/sundar-print/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-rose-600 font-medium py-2">
                      Contact Us
                    </Link>
                  </>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartModalPrint isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
};

export default HeaderPrint;
