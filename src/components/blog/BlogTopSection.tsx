import React from 'react';

const BlogTopSection: React.FC = () => {
  return (
    <div 
      id="blog-hero"
      aria-label="Nexify Digital Blog — Latest Tech News, Web Development Insights and Digital Growth Strategies"
      className="relative w-full min-h-[60vh] flex items-center justify-center text-center text-white"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/Sundar-group-Blog Section.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-6 space-y-6">
      
        <h1 className="text-3xl sm:text-5xl font-bold">
          Sundar Group Blog
        </h1>
      
        <p className="text-xl sm:text-3xl font-semibold text-blue-300">
          Insights, Ideas & Perspectives Shaping Our Future
        </p>
      
        <p className="text-sm sm:text-xl text-gray-200">
          Explore expert articles, industry updates, innovation-led stories, and 
          thought leadership from Sundar Group as we continue to grow across 
          diverse business sectors.
        </p>
      
      </div>
      
    </div>
  );
};

export default BlogTopSection;
