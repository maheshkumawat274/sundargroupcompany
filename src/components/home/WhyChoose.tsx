import React from "react";
import { ShieldCheck, Sparkles, Users, LineChart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Foundation",
    desc: "Built on integrity, transparency, and responsibility, Sundar Group focuses on long-term relationships over short-term gains.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Driven",
    desc: "We continuously adopt forward-thinking ideas and modern practices to create meaningful impact across our business ecosystem.",
  },
  {
    icon: Users,
    title: "People-Centric Approach",
    desc: "Our customers, partners, and teams are at the core of every decision, ensuring solutions that truly add value.",
  },
  {
    icon: LineChart,
    title: "Consistent Growth Mindset",
    desc: "With a strategic vision and disciplined execution, we focus on sustainable growth and long-term value creation.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white pb-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading + Subheading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Sundar Group
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600">
            A multi-sector organization committed to trust, excellence, and
            innovation—building long-term value for every stakeholder.
          </p>

          {/* Accent line */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#345570] rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="
                  relative bg-white rounded-2xl p-7 shadow-md 
                  border border-gray-100 
                  hover:shadow-2xl hover:-translate-y-2 
                  transition-all duration-300 overflow-hidden group
                "
              >
                {/* Soft gradient hover background */}
                <div
                  className="
                    absolute inset-0 bg-gradient-to-br 
                    from-blue-500/5 via-indigo-500/5 to-transparent
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                  "
                />

                {/* Icon */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600/10">
                  <Icon className="w-7 h-7 text-[#345570]" />
                </div>

                {/* Title */}
                <h3 className="relative mt-5 text-lg md:text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
