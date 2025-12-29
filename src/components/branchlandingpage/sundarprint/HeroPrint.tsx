import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const HeroPrint = () => {
  return (
    <section className="relative h-screen w-full px-4 md:px-16 flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ytimg.com/vi/iX83kQ4AkeA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8daFy9RA9Lz8rDN8atdndI4_4kw"
          alt="Fabric texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto w-full  pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4">
            Mastery in Textile Printing
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
            Premium Fabric & <br />
            <span className="text-amber-200">Saree Printing</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Bringing centuries of tradition into the modern era with precision digital and traditional printing techniques. Elevate your fabric designs with Sundar Print.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#AC7C30] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#AC7C30] transition-all flex items-center justify-center gap-2 group"
            >
              Get a Quote
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/20 transition-all text-center"
            >
              View Designs
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};
