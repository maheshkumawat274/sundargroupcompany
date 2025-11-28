import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 mb-2">{new Date(blog.date).toLocaleDateString()}</p>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
        <Link 
          to={`/blog/${blog.slug}`} 
          className="text-blue-600 font-medium hover:underline mt-auto"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;