import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";

interface Blog {
  id: number;
  title: string;
  slug: string;
  image_path: string;
  description: string;
}

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/blogs/list.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-xl font-semibold">Loading blogs...</h2>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 pb-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">All Blogs</h1>
        <p className="text-gray-600 text-lg">
          Explore our latest blogs and stay updated with industry insights.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="h-60 w-full overflow-hidden grou">
              <img
                src={`${config.API_BASE_URL}/${blog.image_path}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={blog.title}
              />
            </div>

            <div className="p-2">
              <h3 className="font-semibold text-[20px] mb-2 line-clamp-2">{blog.title}</h3>

              <p
                className="text-gray-600 text-[14px] leading-relaxed mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              <Link
                to={`/blogs/${blog.slug}`}
                className="text-[#273aa0] font-semibold hover:underline hover:text-[#1b2a7a] transition"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
