import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "Who We Are", path: "/who-we-are", icon: "👥" },
  { label: "Ventures", path: "/ventures", icon: "🚀" },
  { label: "What We Build", path: "/what-we-build", icon: "🏗️" },
  { label: "Impact", path: "/impact", icon: "🌍" },
  { label: "Insights", path: "/blogs", icon: "📝" },
  { label: "Contact Us", path: "/contact-us", icon: "📞" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* ---------- TOP BAR ---------- */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-4 md:px-16 hidden md:flex justify-between items-center">
        <div className="flex space-x-4 text-[#AC7C30]">
          <a href="tel:+910000000000" className="flex items-center">
            <FaPhoneAlt className="mr-2" /> +91-0000000000
          </a>
          <a href="mailto:sundargroup@gmail.com" className="flex items-center">
            <FaEnvelope className="mr-2" /> sundargroup@gmail.com
          </a>
        </div>

        <div className="flex space-x-4 text-[#AC7C30]">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
          <FaTwitter />
          <FaPinterest />
          <FaTelegramPlane />
          <FaWhatsapp />
        </div>
      </div>

      {/* ---------- MAIN HEADER ---------- */}
      <div
        className={`bg-white px-4 md:px-16 flex justify-between items-center shadow transition-all ${
          isScrolled ? "fixed top-0 w-full z-50" : ""
        }`}
      >
        {/* Logo */}
        <div className="h-full w-24 overflow-hidden flex items-center">
          <Link to="/" className="block h-full w-full">
            <img
              src="/imgs/logo.png"
              alt="Sundar Group Logo"
              className="h-full w-full object-cover scale-135"
            />
          </Link>
        </div>

        {/* ---------- DESKTOP NAV ---------- */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-7 text-black text-lg">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="hover:border-b-2 border-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- MOBILE TOGGLE ---------- */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-3xl text-[#AC7C30]"
        >
          <HiMenu />
        </button>
      </div>

      {/* ---------- MOBILE DRAWER ---------- */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-3/4 max-w-xs bg-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-2xl font-bold text-[#AC7C30]">SundarGroup</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl">
            <IoClose />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col px-5 py-6 space-y-5">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <span>{item.icon}</span>
                  <span className="text-lg">{item.label}</span>
                </div>
                <FiArrowRight />
              </div>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-auto px-5 py-6 border-t flex gap-4 text-xl text-[#AC7C30]">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
