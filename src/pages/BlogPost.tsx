import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogs';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, redirect to blog page
  if (!post) {
    React.useEffect(() => {
      navigate('/blog', { replace: true });
    }, [navigate]);
    
    return null;
  }

  // Get related posts (posts in the same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
    .slice(0, 2);

  return (
    <HelmetProvider>
      <SEO 
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-center items-center text-blue-100 text-sm space-x-4">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft size={20} className="mr-2" /> Back to Commercial Carpet Page
            </Link>
            
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Commercial Carpet Topics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard 
                    key={relatedPost.id}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    slug={relatedPost.slug}
                    date={relatedPost.date}
                    author={relatedPost.author}
                    image={relatedPost.image}
                    categories={relatedPost.categories}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA 
        title="Need Help With Your Carpet Project?" 
        subtitle="Contact Carpet Installation Edmonton for expert recommendations and a detailed quote."
      />
    </HelmetProvider>
  );
};

export default BlogPost;