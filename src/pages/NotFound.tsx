import React from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import { Home, Phone } from 'lucide-react';

const NotFound = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Page Not Found | Carpet Installation Edmonton"
        description="The page you are looking for could not be found. Visit our homepage or contact Carpet Installation Edmonton for help."
        canonicalUrl="/404"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
              >
                <Home size={20} className="mr-2" />
                Return to Homepage
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default NotFound;