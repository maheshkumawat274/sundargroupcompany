import React from "react";
import { ShieldCheck, Sparkles, Users, TrendingUp } from "lucide-react";

const valuesData = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We operate with honesty, transparency, and ethical responsibility in every decision we make.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "We embrace new ideas and modern technologies to deliver smarter, future-ready solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "Our customers are at the center of our purpose, guiding our services and improvements.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    desc: "We continually expand our capabilities with long-term vision and a commitment to excellence.",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Core Values
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Principles that shape our identity and guide every step we take as an organization.
        </p>

        {/* Values Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {valuesData.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                  group bg-white rounded-2xl p-8 shadow-lg 
                  hover:shadow-2xl transition-all duration-300 
                  border border-gray-100 relative overflow-hidden
                "
              >
                {/* Gradient Accent */}
                <div className="
                  absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                " />

                {/* Icon */}
                <div className="h-14 w-14 flex items-center justify-center mx-auto rounded-xl bg-blue-600/10">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
