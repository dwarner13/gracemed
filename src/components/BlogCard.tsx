import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  categories?: string[];
}

const BlogCard = ({ 
  title, 
  excerpt, 
  slug, 
  date, 
  author, 
  image,
  categories = [] 
}: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <Link to={`/blog/${slug}`} className="block overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-3">
          <Link to={`/blog/${slug}`} className="text-gray-800 hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        
        <div className="flex items-center text-gray-500 text-sm mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;