import React from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { Heart, Users, Clock, Award, ArrowRight } from 'lucide-react';

interface HomeProps {
  onBookAppointmentClick?: () => void;
}

const Home = ({ onBookAppointmentClick }: HomeProps) => {
  // Featured services (first 3)
  const featuredServices = services.slice(0, 3);

  // Featured testimonials (first 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <HelmetProvider>
      <SEO 
        title="Grace Family Medical Clinic | Family Doctor Edmonton"
        description="Grace Family Medical Clinic in Edmonton provides comprehensive healthcare services including family medicine, walk-in clinic, preventative care, and chronic disease management."
        keywords="family doctor Edmonton, medical clinic Edmonton, walk-in clinic Edmonton, healthcare services Edmonton"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Health Is Our Priority</h1>
              <p className="text-xl mb-8">Providing compassionate, comprehensive healthcare for the entire family in Edmonton since 2005.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {onBookAppointmentClick ? (
                  <button
                    type="button"
                    onClick={onBookAppointmentClick}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg transition duration-300 text-center"
                  >
                    Book an Appointment
                  </button>
                ) : (
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg transition duration-300 text-center"
                  >
                    Book an Appointment
                  </Link>
                )}
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium text-lg transition duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Grace Family Medical Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're committed to providing exceptional healthcare services with a patient-centered approach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Doctors</h3>
              <p className="text-gray-600">Our team of highly qualified physicians provides expert care for your entire family.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenient Hours</h3>
              <p className="text-gray-600">Extended hours and Saturday appointments to accommodate your busy schedule.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Heart size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">From preventative care to chronic disease management, we address all your health needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
              <p className="text-gray-600">We take the time to listen, understand your concerns, and provide personalized care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer a wide range of medical services to meet the healthcare needs of your entire family.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              View All Services <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workplace Injury Services Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Workplace Injuries & WCB Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fast, structured care for job-related injuries with clear treatment plans and return-to-work guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">WCB Claims & Return-to-Work Support</h3>
                <p className="text-gray-600 mb-4">
                  Timely workplace injury assessments, documentation support, and practical modified-duty planning.
                </p>
                <Link
                  to="/services/wcb-claims-support-edmonton"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Occupational Injury Service (OIS)</h3>
                <p className="text-gray-600 mb-4">
                  Focused care for work-related injuries with follow-up planning and coordinated communication.
                </p>
                <Link
                  to="/services/occupational-injury-service-edmonton"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what our patients have to say about their experience at Grace Family Medical Clinic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Testimonial 
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA onButtonClick={onBookAppointmentClick} />
    </HelmetProvider>
  );
};

export default Home;