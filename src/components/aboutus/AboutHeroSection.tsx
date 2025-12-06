import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section
      className="relative min-h-[60vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/imgs/About-SundarGroup-Hero.jpg')", // 👉 is path ko apni background image se replace karein
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[60vh]">
        <div className="w-full max-w-5xl mx-auto px-5 md:px-8 text-center">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            About Sundar Group
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
            A Legacy of Innovation, Integrity & Excellence
          </p>

          {/* Supporting Line */}
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            For decades, Sundar Group has expanded its presence across multiple
            industries with one core belief — delivering value that stands the
            test of time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
