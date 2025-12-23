import React from "react";
import {
  FaLeaf,
  FaBed,
  FaConciergeBell,
  FaGlassCheers,
  FaTree,
  FaHeart,
} from "react-icons/fa";

const WhyResort: React.FC = () => {
  const features = [
    {
      title: "Serene Natural Location",
      description:
        "Nestled amidst nature, Sundar Resort offers complete peace, privacy, and a refreshing escape from city life.",
      icon: <FaLeaf className="text-[#1A3E72] text-4xl" />,
    },
    {
      title: "Comfortable & Elegant Rooms",
      description:
        "Beautifully designed rooms equipped with modern amenities to ensure a relaxing and comfortable stay.",
      icon: <FaBed className="text-[#1A3E72] text-4xl" />,
    },
    {
      title: "Exceptional Hospitality",
      description:
        "Warm, personalized service that makes every guest feel valued, cared for, and truly at home.",
      icon: <FaConciergeBell className="text-[#1A3E72] text-4xl" />,
    },
    {
      title: "Ideal for Events & Celebrations",
      description:
        "A perfect venue for intimate events, family gatherings, and special celebrations in a serene setting.",
      icon: <FaGlassCheers className="text-[#1A3E72] text-4xl" />,
    },
    {
      title: "Lush Green Open Spaces",
      description:
        "Well-maintained green areas ideal for morning walks, relaxation, and reconnecting with nature.",
      icon: <FaTree className="text-[#1A3E72] text-4xl" />,
    },
    {
      title: "Trusted & Memorable Experiences",
      description:
        "Loved and trusted by guests for creating memorable, rejuvenating stays filled with comfort and tranquility.",
      icon: <FaHeart className="text-[#1A3E72] text-4xl" />,
    },
  ];

  return (
    <section className="py-6 px-4 md:px-16 bg-white">
      <div className=" mx-auto ">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-[#1A3E72] font-medium flex items-center gap-2">
            <span className="text-xl">🌿</span> WHY CHOOSE SUNDAR RESORT
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Comfort, Nature & Memorable Stays
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-xl">
            Sundar Resort blends natural beauty, modern comfort, and heartfelt hospitality to create peaceful and unforgettable experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border bg-[#fffaf5] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="text-sm font-medium text-black border-b border-black hover:text-[#1A3E72]">
                  Explore More →
                </button>
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyResort;
