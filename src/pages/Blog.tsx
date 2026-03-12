import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import CTA from '../components/CTA';
import { blogPosts } from '../data/blogs';

const Blog = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Commercial Carpet Installation Edmonton | Office & Retail Flooring"
        description="Commercial carpet installation in Edmonton for offices, retail units, and multi-unit properties with efficient scheduling and professional results."
        keywords="commercial carpet installation Edmonton, office carpet installation Edmonton, retail carpet installation, commercial flooring Edmonton"
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Commercial Carpet Installation</h1>
            <p className="text-xl">Edmonton commercial carpet installation solutions for offices, retail locations, and property managers.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard 
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                author={post.author}
                image={post.image}
                categories={post.categories}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Project Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Commercial Carpet Installation Edmonton Process</h2>
            <p className="text-xl text-gray-600 mb-8">We coordinate product selection, phased scheduling, and installation planning to minimize downtime for your business.</p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Business email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Request Consultation
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">We will only use your information to respond to your commercial flooring request.</p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Planning Commercial Carpet Installation in Edmonton?" 
        subtitle="Contact our team for a detailed quote and installation timeline tailored to your business."
      />
    </HelmetProvider>
  );
};

export default Blog;