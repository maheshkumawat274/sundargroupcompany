import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderResort: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/919999999999", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">

         <div className="h-full w-24 overflow-hidden flex items-center">
                  <Link to="/" className="block h-full w-full">
                    <img
                      src="/imgs/logo.png"
                      alt="Podcast Logo"
                      className="h-full w-full object-cover scale-135"
                    />
                  </Link>
                </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium uppercase text-xs tracking-[0.2em] text-gray-800">
          <a href="#home" className="hover:text-[#c5a059] transition">Home</a>
          <a href="#about" className="hover:text-[#c5a059] transition">About</a>
          <a href="#services" className="hover:text-[#c5a059] transition">Services</a>
          <a href="#gallery" className="hover:text-[#c5a059] transition">Gallery</a>
          <a href="#testimonials" className="hover:text-[#c5a059] transition">Reviews</a>

          <button
            onClick={handleWhatsAppRedirect}
            className="ml-4 px-6 py-2 rounded-sm bg-[#c5a059] text-white font-bold hover:brightness-110 transition active:scale-95"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 flex flex-col gap-4 text-gray-800 font-medium uppercase text-sm tracking-wider">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Reviews</a>

          <button
            onClick={handleWhatsAppRedirect}
            className="mt-2 w-full px-6 py-3 bg-[#c5a059] text-white font-bold rounded-sm"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default HeaderResort;
