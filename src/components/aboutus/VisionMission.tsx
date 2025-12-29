
const MissionVision = () => {
  return (
    <section id="mission-vision"  className="bg-white text-gray-700 py-12  px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Our Mission */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-24 w-1 bg-gradient-to-b from-pink-500 to-yellow-500"></div>
          <div className="pl-6">
            <h2 className="text-3xl font-semibold mb-4">Our Mission </h2>
            <p className="text-gray-700 mb-4">
               To deliver high–quality services through innovation, teamwork, and
              integrity—creating long–term value for our customers, partners, and
              communities while embracing sustainable growth.
            </p>
            </div>
        </div>

        {/* Our Vision */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-24 w-1 bg-gradient-to-b from-pink-500 to-yellow-500"></div>
          <div className="pl-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision for the Future </h2>
            <p className="text-gray-700">
              To become a trusted multi-industry leader known for innovation,
              customer–centricity, and exceptional value creation across all our
              business verticals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;