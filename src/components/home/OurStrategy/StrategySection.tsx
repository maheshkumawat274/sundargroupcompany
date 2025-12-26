import { Link } from "react-router-dom";
import { strategyData } from "./strategyData";

const StrategySection = () => {
  return (
    <section className="bg-white px-4 md:px-16 py-6">
      <div className="mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-black mb-2">
          Our Strategy & Partnerships
        </h2>
        <p className="text-lg text-gray-600 pb-6">We build strong strategies and long-term partnerships to deliver sustainable growth, innovation, and measurable success.</p>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {strategyData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.shortDesc}
                </p>

                <Link
                  to={`/our-strategy/${item.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-[#345570] text-sm font-medium"
                >
                  Click to Read More
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategySection;
