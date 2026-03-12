import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { Clock, MapPin, Award, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Carpet Installation Edmonton | Local Carpet Experts"
        description="Learn about Carpet Installation Edmonton, our process, and why Edmonton homeowners choose us for quality carpet installation and replacement."
        keywords="carpet installation Edmonton, carpet installers Edmonton, Edmonton carpet company, local carpet experts"
        canonicalUrl="/about"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Carpet Installation Edmonton</h1>
            <p className="text-xl">Trusted carpet installation services in Edmonton for homes, rentals, and commercial spaces.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">To deliver dependable carpet installation in Edmonton with skilled workmanship, clear communication, and results that improve comfort and value in every space.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be Edmonton's first choice for carpet installation and carpet repair by consistently providing professional service, quality materials, and long-lasting finishes.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1682448227631-b44e89a2bd74?auto=format&fit=crop&w=1350&q=80" 
                alt="Carpet installation team in Edmonton" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide every carpet installation and repair project we complete in Edmonton.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Heart size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
              <p className="text-gray-600">We listen closely, answer questions clearly, and tailor each recommendation to your Edmonton property and budget.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">From seams to transitions, we focus on clean installation details that improve durability and appearance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Transparency</h3>
              <p className="text-gray-600">We provide clear timelines, straightforward quotes, and regular updates before and during installation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Our team stands behind every job with honest recommendations and reliable service from start to finish.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">We arrive prepared, protect your space, and complete projects on schedule whenever possible.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Commitment</h3>
              <p className="text-gray-600">As an Edmonton-focused team, we understand local property needs and flooring performance in Alberta conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=1350&q=80" 
                alt="Edmonton carpet installation project" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">Carpet Installation Edmonton started with one goal: provide high-quality carpet installation in Edmonton without the stress that often comes with renovation projects.</p>
              <p className="text-gray-600 mb-4">By focusing on careful measurements, proper preparation, and skilled installation, we have grown through referrals from homeowners, landlords, and local businesses.</p>
              <p className="text-gray-600">Today, we continue to serve Edmonton with dependable carpet installation, stair carpet installation, carpet repair, and commercial carpet installation services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Carpet Installation Edmonton</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We combine practical flooring expertise with dependable customer service across Edmonton.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Experienced Installation Team</h3>
              <p className="text-gray-600">Our installers bring hands-on experience with residential and commercial carpet projects across Edmonton.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Complete Carpet Solutions</h3>
              <p className="text-gray-600">From full carpet installation to stair work and targeted carpet repair, we cover every stage of your flooring project.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Client-Focused Process</h3>
              <p className="text-gray-600">Every quote and recommendation is tailored to your layout, usage needs, and budget goals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Efficient Scheduling</h3>
              <p className="text-gray-600">We offer clear booking windows and responsive communication to keep Edmonton projects on track.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Upgrade Your Floors in Edmonton?" 
        subtitle="Request your quote today and see why local property owners choose Carpet Installation Edmonton."
      />
    </HelmetProvider>
  );
};

export default About;