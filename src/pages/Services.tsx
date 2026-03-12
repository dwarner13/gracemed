import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import { services } from '../data/services';

const Services = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Carpet Repair Edmonton | Stretching, Seams & Patch Repair"
        description="Professional carpet repair in Edmonton including carpet stretching, seam repair, patching, and damage restoration for homes and businesses."
        keywords="carpet repair Edmonton, carpet stretching Edmonton, carpet seam repair Edmonton, carpet patch repair Edmonton"
        canonicalUrl="/services"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Carpet Repair Edmonton</h1>
            <p className="text-xl">Restore the look and performance of your carpet with professional repair services in Edmonton.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Carpet Services in Edmonton</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From new carpet installation to targeted carpet repair, we provide practical flooring solutions for Edmonton properties.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Carpet Repair Process in Edmonton</h2>
              <p className="text-gray-600 mb-4">We begin with a clear assessment of wear, ripples, seam separation, or damage so you understand what can be repaired and what should be replaced.</p>
              <p className="text-gray-600 mb-4">Next, our team completes the repair using proven techniques and matching materials whenever possible to blend the fixed area with the existing carpet.</p>
              <p className="text-gray-600">Every repair is finished with cleanup and a walkthrough so you know exactly what was done and how to maintain the result.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1764141011737-d7b2bd824454?auto=format&fit=crop&w=1350&q=80" 
                alt="Carpet repair service in Edmonton" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carpet Repair Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Repair</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Targeted carpet repair services designed for Edmonton homes, rental properties, and commercial interiors.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Carpet Stretching</h3>
              <p className="text-gray-600">Remove bumps and ripples that create tripping hazards and premature wear in high-traffic areas.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Seam Repair</h3>
              <p className="text-gray-600">Repair or replace failing seams to prevent further fraying and keep your carpet looking uniform.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Patch & Burn Repair</h3>
              <p className="text-gray-600">Local patching for stains, pet damage, and burns using donor carpet when available.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Transition & Edge Fixes</h3>
              <p className="text-gray-600">Secure thresholds and edge transitions to improve safety, durability, and finish quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Need Carpet Repair in Edmonton?" 
        subtitle="Contact us today for a fast quote on stretching, seam repair, and carpet damage restoration."
      />
    </HelmetProvider>
  );
};

export default Services;