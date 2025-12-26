import React from "react";

const BlogAbout: React.FC = () => {
  return (
    <section
      id="blog-about"
      className="bg-white text-gray-800 px-4 md:px-20 py-8 sm:py-16"
      aria-labelledby="blog-about-heading"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">

        {/* Left Column: Title + Accent */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          
          <h2
            id="blog-about-heading"
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            About Sundar Group Blog
          </h2>

          <div className="w-12 h-1 bg-[#345570] mb-10"></div>

          <div className="flex items-center gap-2 mt-4">
            <div className="w-0 h-0 border-l-[20px] border-l-[#345570] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
            <div className="w-0 h-0 border-l-[20px] border-l-cyan-900 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 space-y-8">

          {/* Paragraph 1 */}
          <p className="text-lg leading-relaxed">
            Welcome to the Sundar Group Blog — a space dedicated to sharing ideas, 
            industry insights, and thought-leadership from across our diverse business 
            ecosystem. As a multi-sector organization, we believe in fostering knowledge 
            that inspires growth, innovation, and long-term value.
          </p>

          {/* Paragraph 2 */}
          <div>
            <h3 className="text-2xl text-[#345570] font-semibold mb-2">
              What You’ll Discover
            </h3>
            <p className="text-lg leading-relaxed">
              Our blog features articles that explore emerging trends, business strategies, 
              innovation stories, market insights, and the principles that guide large, 
              forward-thinking organizations. Whether you're a professional, student, or 
              business leader, you’ll find content designed to broaden your perspective.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div>
            <h3 className="text-2xl text-[#345570] font-semibold mb-2">
              Why This Blog Matters
            </h3>
            <p className="text-lg leading-relaxed">
              At Sundar Group, our journey has always been rooted in integrity, 
              excellence, and innovation. This blog reflects those values by providing 
              meaningful insights that help readers stay informed about evolving 
              industries, leadership ideas, and the vision that shapes our future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogAbout;
