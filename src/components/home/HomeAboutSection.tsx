import React from "react";
import { Link } from "react-router-dom";

const HomeAboutSection: React.FC = () => {
  return (
    <section className="py-10 bg-white px-4 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6">

          {/* Accent Line */}
          <div className="h-1 w-20 bg-[#345570] rounded-full" />
          
          {/* Section Label */}
          <span className="text-[#344F6C] font-semibold tracking-wide uppercase text-sm">
            About-us 
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Sundar Group
          </h2>

          {/* Short Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Sundar Group is a multi-sector organization driven by trust, innovation,
            and a long-term commitment to excellence. With diversified operations
            across real estate, hospitality, and printing, we focus on delivering
            meaningful value and world-class experiences.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Our legacy is built on ethical leadership, continuous innovation, and
            a dedication to serving communities through sustainable growth.
          </p>

          {/* Button */}
          <button
            className="
              mt-4 w-fit px-6 py-3 text-sm md:text-base
              font-semibold text-white
              bg-[#345570]
              rounded-full shadow-lg hover:shadow-xl 
              hover:scale-[1.03] transition-all duration-300 hover:underline cursor-pointer
            "
          >
            <Link to="/about-us">Learn More About Us</Link>
          </button>
        </div>

        {/* RIGHT SIDE — IMAGE CARD */}
        <div className="relative group">

          {/* Decorative Border */}
          <div className="absolute -top-4 -right-4 w-40 h-40 border-t-4 border-r-4 border-[#345570] rounded-bl-3xl opacity-70" />

          {/* Image Box */}
          <div className="
            rounded-2xl overflow-hidden shadow-xl 
            group-hover:shadow-2xl transition-all duration-500
          ">
            <img
              src="/imgs/About-SundarGroup-Hero.jpg"  // ⭐ apni image laga dena
              alt="About Sundar Group"
              className="
                w-full h-80 md:h-[350px] object-cover 
                group-hover:scale-105 transition-transform duration-700
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAboutSection;
