import { useEffect, useState } from "react";

type Slide = {
  title: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Sundar Resort",
    image: "/imgs/JSD09255.webp",
  },
  {
    title: "Sundar Print",
    image: "https://tiimg.tistatic.com/fp/1/008/297/ladies-machine-embroidery-silk-saree-for-party-wear-069.jpg",
  },
  {
    title: "Sundar Developer",
    image: "/imgs/1721200680663.png",
  },
];

const TopSectionMain = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Infinite loop effect - SIMPLE AND WORKING
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 2000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array = runs once on mount

  // For smooth transition, we need next index
  const nextIndex = (activeIndex + 1) % slides.length;

  return (
    <section className="relative h-[60vh] md:h-screen w-full flex items-center justify-center md:justify-start overflow-hidden">
      
      {/* BACKGROUND IMAGES with smooth crossfade */}
      <div className="absolute inset-0">
        {/* Current Image */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === activeIndex 
                ? "opacity-100 z-10" 
                : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* CONTENT - Mobile responsive layout */}
      <div className="relative z-20 w-full px-4 md:px-16">
        
        {/* MOBILE: Vertical | DESKTOP: Horizontal */}
        <div
          className="flex flex-col md:flex-row 
                     items-center md:items-center 
                     text-center md:text-left"
        >
          
          {/* LEFT / TOP TEXT */}
          <div className="mb-2 md:mb-0 text-4xl md:text-5xl tracking-wide text-white whitespace-nowrap">
            Sundar Group | 
          </div>
      
          {/* SEPARATOR */}
          {/* <div
            className="bg-white/50
                       w-px h-8 md:h-px md:w-10
                       my-2 md:my-0
                       mx-0 md:mx-4"
          ></div>
       */}
          {/* RIGHT / BOTTOM TEXT */}
          <div className="relative py-10  w-[35ch] md:w-[50ch] overflow-hidden">
            
            {/* Text Container */}
            <div className="relative h-full">
              {slides.map((slide, index) => (
                <div
                  key={`${slide.title}-${index}`}
                  className={`absolute inset-0 flex items-center justify-center md:justify-start
                              transition-all duration-1000 ease-in-out
                              ${
                                index === activeIndex
                                  ? "translate-y-0 opacity-100"
                                  : index === nextIndex
                                  ? "translate-y-full opacity-0"
                                  : "-translate-y-full opacity-0"
                              }`}
                >
                  <span className="text-white text-4xl md:text-5xl font-bold whitespace-nowrap px-0 md:px-4">
                    {slide.title}
                  </span>
                </div>
              ))}
            </div>
      
          </div>
      
        </div>
      </div>
      

      {/* Progress indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "bg-emerald-400 w-8" 
                : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS for smooth transitions */}
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          15% {
            transform: translateY(0);
            opacity: 1;
          }
          85% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .animate-slide {
          animation: slideUp 1s ease-in-out infinite;
        }

        /* Ensure smooth image transitions */
        .transition-all {
          transition-property: all;
        }
        
        .duration-1000 {
          transition-duration: 1000ms;
        }
        
        .ease-in-out {
          transition-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TopSectionMain;