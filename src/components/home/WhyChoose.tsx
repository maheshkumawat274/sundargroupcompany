import React from "react";
import { ShieldCheck, Sparkles, Users, LineChart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Foundation",
    desc: "Built on integrity, transparency, and responsibility, Sundar Group focuses on long-term relationships over short-term gains.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    icon: Sparkles,
    title: "Innovation-Driven",
    desc: "We continuously adopt forward-thinking ideas and modern practices to create meaningful impact across our business ecosystem.",
    image: "https://stimulusworld.com/storage/app/uploads/all/KIGN6LXpHj6wtY1Pnxx48c8YyBvY5rwp5wgKZX2v.jpg",
  },
  {
    icon: Users,
    title: "People-Centric Approach",
    desc: "Our customers, partners, and teams are at the core of every decision, ensuring solutions that truly add value.",
    image: "https://static.investindia.gov.in/s3fs-public/2020-12/shutterstock_1262330791.jpg",
  },
  {
    icon: LineChart,
    title: "Consistent Growth Mindset",
    desc: "With a strategic vision and disciplined execution, we focus on sustainable growth and long-term value creation.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#345570] rounded-full"></div>
            <span className="text-sm font-medium text-[#345570]">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The Sundar Print 
            <span className="text-[#345570] block mt-2">Advantage</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover why thousands of customers trust Sundar Print for their fabric needs.
            We combine traditional craftsmanship with modern innovation.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 relative">
            <div className="h-1 w-24 bg-gradient-to-r from-[#345570] to-purple-600 rounded-full mx-auto"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Background Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Index Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-[#345570]">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Icon Container */}
                  <div className="absolute -top-6 left-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#345570]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#345570] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {reason.desc}
                    </p>
                  </div>

                  
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#345570]/10 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default WhyChooseUs;