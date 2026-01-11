
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import type { ViewState } from '../types';
import { Link } from 'react-router-dom';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const HeaderDeveloper: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Our Projects', view: 'projects' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetQuote = () => {
    window.open(WHATSAPP_LINK("Hello Sundar Construction, I would like to get a quote for my upcoming project."), "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="h-full w-24 overflow-hidden flex items-center">
          <Link to="/" className="block h-full w-full">
            <img
              src="/imgs/logo.png"
              alt="Podcast Logo"
              className="h-full w-full object-cover scale-135"
            />
          </Link>
        </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentView === link.view ? 'text-amber-500' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3 text-slate-300">
              <Phone size={18} className="text-amber-500" />
              <span className="text-sm font-bold">+91 98765 43210</span>
            </div>
            <button 
              onClick={handleGetQuote}
              className="px-6 py-3 bg-amber-500 text-slate-900 font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-amber-400 transition-all active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 animate-fade-in p-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.view}>
                <button
                  onClick={() => handleNavClick(link.view)}
                  className="text-lg font-bold uppercase tracking-widest block w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleGetQuote}
                className="w-full px-6 py-4 bg-amber-500 text-slate-900 font-bold uppercase text-sm tracking-widest rounded-lg"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderDeveloper;
