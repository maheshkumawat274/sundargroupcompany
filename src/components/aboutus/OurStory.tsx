import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-16 py-6 md:py-16 bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">
          {/* Section Label */}
          <span className="text-[#344F6C] font-semibold tracking-wide uppercase text-sm">
            Our Story
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            A Journey Built on Trust, Innovation & Long-Term Commitment
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Sundar Group is a multi-sector organization built on the pillars of
            trust, innovation, and long-term commitment. What began as a vision
            to serve communities with quality and integrity has today grown into
            a diversified group operating across real estate development,
            hospitality, and commercial printing.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Through the years, we have consistently evolved, embraced modern
            technologies, and delivered meaningful value across every project.
            Our dedication to ethical practices and transparent operations
            continues to define our legacy.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE DESIGN BOX */}
        <div className="relative w-full h-72 md:h-96 ">
          {/* Decorative Accent Line */}
          <div className="absolute -top-4 -left-4 w-24 hidden md:block h-24 border-t-4 border-l-4 border-[#344F6C] rounded-tr-xl rounded-bl-xl" />

          {/* Image Card */}
          <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl">
            <img
              src="/imgs/OurStory-SundarGroup.avif" // 👉 yaha apni image laga dena
              alt="Our Story"
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
