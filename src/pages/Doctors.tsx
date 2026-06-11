import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

const Doctors = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Our Medical Team | Grace Family Medical Clinic Edmonton"
        description="Learn about the medical team at Grace Family Medical Clinic in Edmonton. Contact the clinic directly for information regarding physician availability and services."
        keywords="medical team Edmonton, family medical clinic Edmonton, healthcare providers Edmonton"
        canonicalUrl="/doctors"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Medical Team</h1>
          </div>
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-lg text-gray-600">
                Our physician information is currently being updated. Please contact the clinic
                directly for information regarding physician availability and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Find Your Healthcare Partner" 
        subtitle="Contact us today to learn more about our services and how we can support your health."
      />
    </HelmetProvider>
  );
};

export default Doctors;
