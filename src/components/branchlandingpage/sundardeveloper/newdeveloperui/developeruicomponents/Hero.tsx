
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/mockData';
import { WHATSAPP_LINK } from '../constants';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleLearnMore = () => {
    window.open(WHATSAPP_LINK("Hello, I want to learn more about your premium construction services and previous projects."), "_blank");
  };

  return (
    <section className="relative h-[90vh] bg-slate-900 overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <img src={slide.image} className="w-full h-full object-cover opacity-50 transition-transform duration-[10000ms] ease-linear transform hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl space-y-6">
                <span className="inline-block px-4 py-1 bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm animate-fade-in">
                  {slide.subtitle}
                </span>
                <h2 className="text-6xl md:text-8xl font-black text-white leading-tight animate-fade-in font-serif">
                  {slide.title}
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex gap-4 pt-8 animate-fade-in">
                  <button 
                    onClick={() => onNavigate('projects')}
                    className="px-10 py-5 bg-amber-500 text-slate-900 font-black uppercase text-sm tracking-widest rounded-lg hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
                  >
                    View Project
                  </button>
                  <button 
                    onClick={handleLearnMore}
                    className="px-10 py-5 bg-white/10 text-white font-black border border-white/20 uppercase text-sm tracking-widest rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 right-12 flex gap-4">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-12 left-12 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-amber-500' : 'w-6 bg-white/20'}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
