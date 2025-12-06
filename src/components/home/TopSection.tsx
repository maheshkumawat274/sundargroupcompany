import React from "react";

const TopSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[70vh] w-full px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/imgs/Hero-Sundar-Group-Comapny.webp')", // 👉 is path ko apni image se replace karna
      }}
    >
      {/* Dark overlay with opacity */}
      <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center">
        <div className="mx-auto flex w-full flex-col gap-6 text-center md:text-left">
          <p className="text-sm font-medium tracking-[0.25em] text-slate-200 uppercase">
            Sundar Group
          </p>

          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            A Multi-Sector Group Driven by Innovation & Excellence
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-slate-200/90 mx-auto md:mx-0">
            Sundar Group has been committed to delivering innovation,
            trust, and quality across multiple sectors, shaping experiences and
            enriching communities.
          </p>

          {/* Visual-only button (no click handler) */}
          <div className="mt-4">
            <span
              className="
                inline-flex items-center justify-center
                rounded-full px-6 py-2.5
                text-sm sm:text-base font-medium
                hover:bg-white hover:text-black
                border-2 border-white text-white
                shadow-md shadow-black/30 transition-all duration-300 cursor-pointer
              "
            >
              Explore Our Businesses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
