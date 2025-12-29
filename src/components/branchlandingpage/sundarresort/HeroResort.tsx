import React from 'react';

export const HeroResort: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 animate-fade-in-up">
          Sundar Resort
        </h1>
        <div className="w-32 h-0.5 bg-white/60 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-95 animate-fade-in-up animation-delay-200">
          A Signature Hospitality Experience
        </p>
        <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Where pristine nature meets refined comfort, creating moments of tranquility and connection in the heart of serenity
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};