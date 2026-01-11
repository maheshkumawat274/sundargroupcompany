
import React from 'react';
import { Building2, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900">
                <Building2 size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Sundar <span className="text-amber-500">Construction</span></h2>
            </div>
            <p className="text-sm leading-relaxed">
              Crafting architectural excellence since 1999. India's premier choice for residential, commercial, and industrial infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Legacy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Portfolios</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial Towers</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Industrial Warehousing</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Urban Planning</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Civil Engineering</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Contact Information</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-amber-500 shrink-0" size={20} />
                <span>4th Floor, Skyline Avenue, Industrial Area, Noida, UP - 201301</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <span>projects@sundarconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold">© 2024 Sundar Construction. Built with Integrity.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
