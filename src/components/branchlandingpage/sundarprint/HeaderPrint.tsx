import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './contextprint/useCart';
import CartModalPrint from './CardModelPrint';
import WishlistModal from './WishListModelPrint';

const HeaderPrint: React.FC = () => {
  const { cartCount, wishlistItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const location = useLocation();
  const profileRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === '/';

  /* CLOSE PROFILE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <Link to="/" className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="text-rose-600">Sundar</span> Print
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center space-x-8">
              {isHome ? (
                <>
                  <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
                  <a onClick={() => scrollToSection('about')} className="nav-link">About Us</a>
                  <a onClick={() => scrollToSection('contact')} className="nav-link">Contact Us</a>
                </>
              ) : (
                <>
                  <Link to="/branch/sundar-print" className="nav-link">Home</Link>
                  <Link to="/branch/sundar-print/about-us" className="nav-link">About Us</Link>
                  <Link to="/branch/sundar-print/contact-us" className="nav-link">Contact Us</Link>
                </>
              )}
            </nav>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4 relative">

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

              {/* PROFILE */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2"
                >
                  👤
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 top-11 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <Link
                      to="/account/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/account/settings"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE MENU */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                ☰
              </button>
            </div>
          </div>

          {/* MOBILE NAV */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <Link to="/" className="block py-2">Home</Link>
              <Link to="/about" className="block py-2">About</Link>
              <Link to="/contact" className="block py-2">Contact</Link>
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
