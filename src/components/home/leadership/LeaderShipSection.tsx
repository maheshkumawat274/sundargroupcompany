import React from "react";
import { Link } from "react-router-dom";
import { leadershipData } from "./Leadership";

const LeadershipSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      <div className="mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Legacy & Leadership
          </h2>
          <p className="text-gray-700 mt-2 text-lg">
            Our force of success
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item) => (
            <Link
              key={item.id}
              to={`/leadership/${item.slug}`}
              className="relative h-[420px] overflow-hidden group"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-light leading-snug max-w-md">
                  {item.title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-wide opacity-80 group-hover:opacity-100 transition">
                  Click to Read More
                  <span className="text-lg">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
