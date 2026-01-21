
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Group Branding & Socials */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-16 border-b border-white/10">
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-lg">
                <span className="text-slate-950 font-black text-2xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">SUNDAR GROUP</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500">A Legacy of Excellence</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Sundar Group is a multi-sector conglomerate dedicated to quality, innovation, and sustainable growth across textile printing, luxury hospitality, and real estate development.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section: Branch Specific Columns & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 py-16">
          
          {/* Column 1: Sundar Print */}
          <Link to="/branch/sundar-print">
            <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-white">
              Sundar Print
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Casual Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Daily Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Party Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bandhani Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors italic opacity-60">And more...</a></li>
            </ul>
          </div>
          </Link>

          {/* Column 2: Sundar Resort */}
          <Link to="/branch/sundar-resort">
            <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-white">
              Sundar Resort
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Luxury Accommodation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Swimming Pool</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grand Dining Hall</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Majestic Event Hall</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lush Green Gardens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagrammable Selfie Points</a></li>
            </ul>
          </div>
          </Link>

          {/* Column 3: Sundar Developer */}
          <Link to="/branch/sundar-developer">
            <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-white">
              Sundar Developer
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Residential Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Complexes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Civil Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ongoing Developments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>
          </Link>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors"><Link to="/who-we-are">Who we are</Link></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><Link to="/ventures">Ventures</Link></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><Link to="/what-we-build">What we build</Link></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><Link to="/impact">Impact</Link></a></li>
              <li><a href="#" className="hover:text-white transition-colors font-semibold"><Link to="/contact-us">Contact us</Link></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><Link to="/blogs">Insights</Link></a></li>
            </ul>
          </div>

          {/* Column 5: Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-white">
              Office Address
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-slate-500 shrink-0" size={20} />
                <p className="text-sm leading-relaxed text-slate-400">
                  Sundar Corporate House, <br />
                  Business District, NH-48,<br />
                  New Delhi - 110001, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-slate-500 shrink-0" size={20} />
                <p className="text-sm text-slate-400 font-medium">+91 (011) 2345 6789</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-slate-500 shrink-0" size={20} />
                <p className="text-sm text-slate-400 font-medium">info@sundargroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="bg-[#25D366]/5 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#25D366]/20">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
              <MessageCircle className="text-[#25D366]" /> Get Instant Assistance
            </h3>
            <p className="text-slate-400">Have a query? Chat with our experts directly on WhatsApp for a faster response.</p>
          </div>
          <div className="w-full md:w-auto">
            <a 
              href="https://wa.me/9101123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl shadow-[#25D366]/10"
            >
              <MessageCircle fill="white" size={24} />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-xs tracking-wider uppercase font-medium text-slate-500">
          <p>© {currentYear} Sundar Group of Companies. All Rights Reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
