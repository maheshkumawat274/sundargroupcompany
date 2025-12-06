import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";

interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_path: string;
  created_at: string;
}

const HomeBlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/blogs/list.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.blogs) {
          // Sort by latest date and take latest 3
          const latest = data.blogs
            .sort(
              (a: Blog, b: Blog) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .slice(0, 3);

          setBlogs(latest);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="blog-updates" className="py-10 px-4 md:px-16">
      {/* TOP SECTION */}
      <div className="w-full mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <img
            src="/imgs/blog-section-nexify-digital.jpg"
            alt="Sundar Group latest blog insights and tech updates"
            className="rounded-2xl shadow-lg w-full object-cover md:h-[350px] lg:h-[400px]"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[#345570] font-semibold mb-2">Industry Insights</h3>

          <h2 className="text-3xl md:text-4xl text-gray-700 font-bold leading-snug mb-4">
            Explore Our Latest Tech Blogs & Digital Innovations
          </h2>

          <p className="text-gray-700 mb-6 text-md md:text-lg">
            Stay updated with the latest technology updates, development trends,
            and digital growth strategies through our expert-written blogs.
          </p>

          <Link
            to="/blogs"
            className="inline-block bg-[#345570] text-white px-6 py-2 rounded-full font-semibold hover:underline transition self-start"
          >
            View All Blogs →
          </Link>
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-3 text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={`${config.API_BASE_URL}/${blog.image_path}`}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="font-bold text-lg mb-2 text-gray-700">{blog.title}</h3>

                <div
                 className="text-gray-700 text-sm mb-3 line-clamp-3"
                 dangerouslySetInnerHTML={{ __html: blog.description }}
                ></div>

                <p className="text-[#345570] text-xs font-semibold mb-3">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="text-[#345570] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HomeBlogSection;
