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

  // 🔐 LOGIN STATE (localStorage based)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    Boolean(localStorage.getItem("user"))
  );

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
  };

  return (
    <>
      <header className="bg-white py-1 fixed top-0 z-50 w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <div className="h-full w-24 overflow-hidden flex items-center">
              <Link to="/" className="block h-full w-full">
                <img
                  src="/imgs/logo.png"
                  alt="Company Logo"
                  className="h-full w-full object-cover scale-125"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center space-x-8">
              {isHome ? (
                <>
                  <a onClick={() => scrollToSection('home')} className="nav-link cursor-pointer">Home</a>
                  <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About Us</a>
                  <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact Us</a>
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
                className="relative p-2 text-gray-700 text-xl hover:text-rose-600"
              >
                ❤️
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 text-xl hover:text-rose-600"
              >
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* SIGN IN / PROFILE */}
              {!isLoggedIn ? (
                <Link
                  to="/branch/sundar-print/wholesaler/login"
                  className="hidden md:block text-sm font-medium text-gray-700 hover:text-rose-600"
                >
                  Sign In
                </Link>
              ) : (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="p-2 text-xl"
                  >
                    👤
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                      <Link
                        to="/user"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        My Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

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
            <nav className="md:hidden py-4 border-t space-y-2">
              <Link to="/" className="block">Home</Link>
              <Link to="/about" className="block">About</Link>
              <Link to="/contact" className="block">Contact</Link>

              {!isLoggedIn ? (
                <Link to="/signin" className="block font-medium">Sign In</Link>
              ) : (
                <>
                  <Link to="/user" className="block">My Account</Link>
                  <button
                    onClick={handleLogout}
                    className="block text-left text-red-600"
                  >
                    Logout
                  </button>
                </>
              )}
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
