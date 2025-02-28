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
        title="Our Services | Grace Family Medical Clinic Edmonton"
        description="Comprehensive healthcare services offered at Grace Family Medical Clinic in Edmonton. Family medicine, preventative care, chronic disease management, and more."
        keywords="medical services Edmonton, family medicine, walk-in clinic, preventative care, chronic disease management, Edmonton healthcare"
        canonicalUrl="/services"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive healthcare services for you and your family at every stage of life.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Healthcare Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">At Grace Family Medical Clinic, we offer a wide range of medical services to meet the diverse healthcare needs of our Edmonton community.</p>
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

      {/* Patient-Centered Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Patient-Centered Approach</h2>
              <p className="text-gray-600 mb-4">At Grace Family Medical Clinic, we believe in a patient-centered approach to healthcare. This means we focus on building long-term relationships with our patients, taking the time to listen to your concerns, and involving you in decisions about your health.</p>
              <p className="text-gray-600 mb-4">Our goal is not just to treat illness, but to promote overall wellness and help you achieve optimal health. We work with you to develop personalized care plans that address your unique health needs and goals.</p>
              <p className="text-gray-600">Whether you're seeking preventative care, treatment for an acute illness, or management of a chronic condition, our team is here to provide compassionate, comprehensive care that puts you first.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Doctor consulting with patient" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Insurance & Payment Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We strive to make healthcare accessible and affordable for our patients.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Alberta Health Care</h3>
              <p className="text-gray-600">Most of our services are covered by Alberta Health Care Insurance Plan (AHCIP). Please bring your Alberta Health Care card to each visit.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Private Insurance</h3>
              <p className="text-gray-600">For services not covered by Alberta Health Care, we accept most private insurance plans. We recommend contacting your insurance provider to verify coverage for specific services.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Payment Options</h3>
              <p className="text-gray-600">For services not covered by insurance, we accept payment by cash, debit, and major credit cards. Payment is expected at the time of service.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Uninsured Patients</h3>
              <p className="text-gray-600">If you don't have Alberta Health Care or private insurance, please contact our office to discuss payment options. We are committed to providing care for all patients in our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Schedule Your Appointment?" 
        subtitle="Contact us today to book an appointment for any of our comprehensive healthcare services."
      />
    </HelmetProvider>
  );
};

export default Services;