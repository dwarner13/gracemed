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
        title="Health Blog | Grace Family Medical Clinic Edmonton"
        description="Read our latest health articles and medical advice from the doctors at Grace Family Medical Clinic in Edmonton. Stay informed about health topics and wellness tips."
        keywords="health blog Edmonton, medical articles, health tips, wellness advice, Edmonton healthcare blog"
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Health Blog</h1>
            <p className="text-xl">Stay informed with the latest health tips, medical advice, and clinic updates from our team of healthcare professionals.</p>
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8">Stay up-to-date with the latest health tips, clinic news, and community events. We'll deliver valuable content straight to your inbox.</p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Have a Health Question?" 
        subtitle="Schedule an appointment with one of our healthcare providers to discuss your health concerns."
      />
    </HelmetProvider>
  );
};

export default Blog;