import type { BlogPost } from "../types";

const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Business in 2024",
    slug: "future-of-business-2024",
    excerpt: "Explore the trends that will shape business in the coming year including AI, automation, and sustainability.",
    content: "Full content here...",
    date: "2024-01-15",
    image: "/images/blog1.jpg"
  },
  {
    id: "2",
    title: "How to Optimize Your Supply Chain",
    slug: "optimize-supply-chain",
    excerpt: "Practical tips and tricks to make your supply chain more efficient and cost-effective.",
    content: "Full content here...",
    date: "2024-02-10",
    image: "/images/blog2.jpg"
  },
  {
    id: "3",
    title: "Sustainability in Modern Business",
    slug: "sustainability-modern-business",
    excerpt: "Why sustainability is no longer optional and how your business can contribute.",
    content: "Full content here...",
    date: "2024-03-05",
    image: "/images/blog3.jpg"
  }
];

// FUTURE API
// export const getBlogs = async (): Promise<BlogPost[]> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/blogs`);
//   return res.json();
// };

export const getBlogs = async (): Promise<BlogPost[]> => {
  return mockBlogs;
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  return mockBlogs.find(b => b.slug === slug) || null;
};