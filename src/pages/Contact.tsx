import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Contact Carpet Installers Edmonton | Free Quotes"
        description="Contact Carpet Installers Edmonton for carpet installation, stair carpet installation, carpet repair, and commercial carpet quotes in Edmonton."
        keywords="contact carpet installer Edmonton, carpet quote Edmonton, carpet repair contact Edmonton, commercial carpet quote"
        canonicalUrl="/contact"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Carpet Installers Edmonton</h1>
            <p className="text-xl">Get in touch for carpet installation, stair carpet installation, carpet repair, and commercial flooring quotes in Edmonton.</p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Tell us about your project and we will provide a clear quote, timeline, and service recommendations for your Edmonton property.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:5875681929" className="hover:text-blue-600">587-568-1929</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:carpetinstallersedmonton@gmail.com" className="hover:text-blue-600">carpetinstallersedmonton@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Edmonton, Alberta, Canada
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3>
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.7032357473397!2d-113.49603542326605!3d53.54610997246392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02378c0b8e111%3A0x410c6d5d7c8b30e1!2sDowntown%20Edmonton%2C%20Edmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1682456789012!5m2!1sen!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carpet Installers Edmonton Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Request a Quote</h2>
              <p className="text-gray-600 mb-8">Share your project details and we will get back to you with next steps and pricing information.</p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Project Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">New Clients</h3>
                <p className="text-gray-600 mb-4">For first-time projects, we gather room sizes, property type, and preferred timeline to prepare a detailed quote.</p>
                <p className="text-gray-600">If available, include photos of the current flooring and any problem areas so we can recommend the right carpet solution.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Returning Clients</h3>
                <p className="text-gray-600 mb-4">Returning clients can request follow-up carpet repair, additional rooms, or commercial scheduling by phone or email.</p>
                <p className="text-gray-600">Need to change your installation date? Please provide at least 24 hours' notice so we can adjust the schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Contact;