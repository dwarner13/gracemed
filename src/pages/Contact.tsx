import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Contact Us | Grace Family Medical Clinic Edmonton"
        description="Contact Grace Family Medical Clinic in Edmonton. Book appointments, find our location, and get in touch with our healthcare team."
        keywords="contact doctor Edmonton, book appointment Edmonton, medical clinic contact, Edmonton healthcare contact"
        canonicalUrl="/contact"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our team to schedule appointments, ask questions, or learn more about our services.</p>
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
              <p className="text-gray-600 mb-8">We're here to help with any questions you may have about our services or to schedule an appointment. Reach out to us using any of the methods below.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+17804567890" className="hover:text-blue-600">780-456-7890</a>
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
                      <a href="mailto:info@gracefamilymedicalclinic.com" className="hover:text-blue-600">info@gracefamilymedicalclinic.com</a>
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
                      123 Medical Drive<br />
                      Edmonton, AB T5J 1A1<br />
                      Canada
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
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
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
                    title="Grace Family Medical Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Have a question or want to schedule an appointment? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Appointment Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">New Patients</h3>
                <p className="text-gray-600 mb-4">We welcome new patients to our clinic. To schedule your first appointment, please call our office or fill out the contact form. We'll need some basic information and will help you prepare for your first visit.</p>
                <p className="text-gray-600">For your first appointment, please arrive 15 minutes early to complete necessary paperwork. Bring your Alberta Health Care card, photo ID, and a list of current medications.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Existing Patients</h3>
                <p className="text-gray-600 mb-4">Existing patients can schedule appointments by phone, email, or through our online booking system. Same-day appointments are often available for urgent concerns.</p>
                <p className="text-gray-600">If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice so we can offer the time slot to another patient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Contact;