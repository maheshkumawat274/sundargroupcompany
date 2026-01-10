import { useEffect, useState } from "react";
import { HERO_SLIDES } from "./mockdataresort/resortmockdata";


const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Namaste! I am visiting your website and would like to book a stay at Sundar Resort. Please guide me.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-900">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-amber-400 uppercase tracking-widest mb-4 font-semibold text-lg animate-bounce drop-shadow-md">
              {slide.subtitle}
            </h2>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl font-serif">
              {slide.title}
            </h1>
            <button 
              onClick={handleWhatsAppRedirect}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium tracking-wide shadow-xl active:scale-95"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      ))}
      
      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all duration-300 rounded-full cursor-pointer shadow-md ${
              index === current ? 'w-12 bg-amber-500' : 'w-4 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
