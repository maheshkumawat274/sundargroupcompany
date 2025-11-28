import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../components/types';
import { getBlogs } from '../components/blog/BlogServices';
import BlogCard from '../components/blog/BlogCard';

// ===== ADDITIONAL TYPE FOR CATEGORIES (API-Ready) =====
interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

// ===== MOCK CATEGORIES (Remove when API is ready) =====
const mockCategories: BlogCategory[] = [
  { id: "1", name: "All", slug: "all" },
  { id: "2", name: "Business", slug: "business" },
  { id: "3", name: "Technology", slug: "technology" },
  { id: "4", name: "Industry News", slug: "industry-news" },
  { id: "5", name: "Company Updates", slug: "company-updates" }
];

// ===== API SERVICE FUNCTIONS (Future Integration) =====

// FUTURE: Uncomment when backend is ready
// const getBlogCategories = async (): Promise<BlogCategory[]> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/blog/categories`);
//   if (!res.ok) throw new Error('Failed to fetch categories');
//   return res.json();
// };

// CURRENT: Mock implementation
const getBlogCategories = async (): Promise<BlogCategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCategories), 200);
  });
};

// FUTURE: Filtered blogs by category
// const getBlogsByCategory = async (categorySlug: string): Promise<BlogPost[]> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/blogs?category=${categorySlug}`);
//   if (!res.ok) throw new Error('Failed to fetch blogs');
//   return res.json();
// };

// ===== FEATURED BLOG COMPONENT =====
interface FeaturedBlogProps {
  blog: BlogPost;
}

const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ blog }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 group">
      <div className="absolute inset-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Featured+Blog';
          }}
        />
      </div>
      <div className="relative p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
        <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4 w-fit">
          Featured
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{blog.title}</h2>
        <p className="text-gray-200 mb-6 max-w-2xl">{blog.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <Link
            to={`/blog/${blog.slug}`}
            className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
};

// ===== BLOG LIST ITEM COMPONENT =====
interface BlogListItemProps {
  blog: BlogPost;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ blog }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Blog+Image';
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-sm text-gray-500 mb-2">
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog.slug}`}
          className="text-blue-600 font-medium hover:underline inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

// ===== MAIN BLOG PAGE COMPONENT =====
const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // FUTURE: Replace with actual API calls
        const [blogsData, categoriesData] = await Promise.all([
          getBlogs(),
          getBlogCategories()
        ]);
        setBlogs(blogsData);
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error fetching blog data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // FUTURE: This filtering will be done server-side
  // For now, client-side filtering with mock data
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    // FUTURE: Add category filtering when category field is added to BlogPost
    // const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch;
  });

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Insights, news, and updates from the Sundar Group team
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-white shadow-sm py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              {/* Featured Blog */}
              {featuredBlog && (
                <div className="mb-12">
                  <FeaturedBlog blog={featuredBlog} />
                </div>
              )}

              {/* Blog Grid */}
              {remainingBlogs.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Articles</h2>
                  
                  {/* Grid View for Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {remainingBlogs.slice(0, 3).map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>

                  {/* List View for Remaining */}
                  {remainingBlogs.length > 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">More Articles</h2>
                      {remainingBlogs.slice(3).map((blog) => (
                        <BlogListItem key={blog.id} blog={blog} />
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Pagination (Future API Ready) */}
              {/* FUTURE: Implement pagination when API supports it */}
              {/*
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 border rounded hover:bg-gray-100">Previous</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
                  <button className="px-4 py-2 border rounded hover:bg-gray-100">2</button>
                  <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
                  <button className="px-4 py-2 border rounded hover:bg-gray-100">Next</button>
                </nav>
              </div>
              */}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription (Future API Ready) */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get the latest articles, industry insights, and company updates delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // FUTURE: API call for newsletter subscription
              // const email = (e.target as HTMLFormElement).email.value;
              // await subscribeToNewsletter(email);
              alert('Newsletter subscription coming soon!');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;