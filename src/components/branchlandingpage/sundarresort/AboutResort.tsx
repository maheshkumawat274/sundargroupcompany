
const AboutuResort = () => {
  return (
    <section id="aboutus" className="relative bg-white py-4 md:py-16 px-4 md:px-16 overflow-hidden">
     <div className=" mx-auto grid md:grid-cols-2 gap-10 items-stretch relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-600 text-xl">🏠</span>
            <p className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              About Us
            </p>
          </div>
          <h3 className="text-[#1A3E72] font-bold text-xl sm:text-3xl">Guiding You Through Buying, Selling & Renting</h3>
          <p className="text-gray-600 text-md sm:text-lg">
            Your investment journey should feel exciting, not overwhelming. That’s why we provide step-by-step support for off-plan property purchases—helping you choose the right project, plan payments, and navigate handover with ease. With market insights, early access to exclusive launches, and partnerships with Dubai’s leading developers, we’re here to make your first—or next—investment smooth, profitable, and stress-free.

          </p>
          <button className="px-6 py-2 bg-[#1A3E72] text-white cursor-pointer rounded-sm transform hover:-translate-y-0.5 transition">Find Dream Projects</button>
          
        </div>

        {/* Right Images */}
        <div className="relative w-full px-10 flex justify-center items-center">
            {/* Large Image */}
          <img
            src="/imgs/Premium-villa-8.webp"
            alt="Big"
            className="rounded-2xl shadow-lg w-3/4 relative left-18 md:left-10"
          />

          {/* Small Image (overlap) */}
          <img
            src="/imgs/Townhouse-8.webp"
            alt="Small"
            className="absolute left-0 md:-left-4 bottom-0 sm:bottom-4 w-1/2 rounded-2xl shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutuResort;