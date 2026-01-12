import React, { useState } from "react";

const heroSlides = [
  {
    id: 1,
    title: "Sundar Print",
    highlight: "Sundar",
    image:
      "https://peachmode.com/cdn/shop/products/chiku-casual-wear-printed-georgette-saree-peachmode-1.jpg?v=1669018153&width=2000",
  },
  {
    id: 2,
    title: "Premium Sarees",
    highlight: "Premium",
    image:
      "https://myblacktree.com/cdn/shop/files/multicolor-casual-wear-printed-silk-saree-peachmode-1_c2839cbc-943c-4834-8a47-77c20987d5d8.jpg?v=1743377332&width=1946",
  },
  {
    id: 3,
    title: "Traditional Elegance",
    highlight: "Traditional",
    image:
      "https://peachmode.com/cdn/shop/products/unique-green-and-blue-casual-wear-printed-art-silk-saree-peachmode-1.jpg?v=1669038797&width=2000",
  },
];

const HeroPrint: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      
      {/* SLIDES */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-[600px] md:min-h-[700px]">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-rose-400">
              {heroSlides[current].highlight}
            </span>{" "}
            Print
          </h1>

          <a
            href="#categories"
            className="inline-block px-8 py-4 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition"
          >
            Explore Collection
          </a>
        </div>
      </div>

      {/* LEFT / RIGHT BUTTONS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-rose-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroPrint;
