import React from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { Heart, Users, Clock, Award, ArrowRight } from 'lucide-react';

interface HomeProps {
  onBookAppointmentClick?: () => void;
}

const Home = ({ onBookAppointmentClick }: HomeProps) => {
  // Featured services (all core services)
  const featuredServices = services;

  // Featured testimonials (first 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Carpet Installers Edmonton",
    "telephone": "587-568-1929",
    "email": "carpetinstallersedmonton@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "areaServed": "Edmonton"
  };

  return (
    <HelmetProvider>
      <SEO 
        title="Carpet Installation Edmonton | Carpet Installers Edmonton"
        description="Professional carpet installation in Edmonton. Carpet Installers Edmonton provides residential and commercial carpet installation, stair carpet installation, and carpet repair. Call 587-568-1929 for a quote."
        keywords="carpet installation Edmonton, stair carpet installation Edmonton, carpet repair Edmonton, commercial carpet installation Edmonton"
        canonicalUrl="/"
        schemaData={homeSchema}
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Carpet Installation Edmonton</h1>
              <p className="text-xl mb-8">Trusted carpet installers serving Edmonton homes and businesses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {onBookAppointmentClick ? (
                  <button
                    type="button"
                    onClick={onBookAppointmentClick}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg transition duration-300 text-center"
                  >
                    Request a Free Quote
                  </button>
                ) : (
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg transition duration-300 text-center"
                  >
                    Request a Free Quote
                  </Link>
                )}
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium text-lg transition duration-300 text-center"
                >
                  View Carpet Services
                </Link>
              </div>
              <div className="mt-6">
                <a href="tel:5875681929" className="text-white underline font-semibold text-lg">
                  587-568-1929
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=1350&q=80" 
                alt="Carpet installers in Edmonton" 
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Carpet Installers Edmonton</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional service, quality workmanship, and reliable scheduling for every carpet project in Edmonton.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Installers</h3>
              <p className="text-gray-600">Our team has the hands-on experience to install carpet correctly in all property types.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">We provide efficient scheduling and timely project completion for Edmonton homeowners and businesses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Heart size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">Every seam, edge, and transition is installed with care for a clean, long-lasting finish.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">We offer competitive rates and transparent quotes for carpet installation and repair in Edmonton.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serving All Edmonton Neighborhoods</h3>
              <p className="text-gray-600">Our local team provides dependable carpet services across Edmonton and surrounding communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Carpet Services in Edmonton</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Local carpet installation and repair services designed for Edmonton homes and businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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

      {/* Service Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Serving All Edmonton Neighborhoods</h2>
            <p className="text-xl text-gray-600 mb-8">Carpet Installers Edmonton provides service across major Edmonton communities and nearby areas.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-left">
              {[
                'Edmonton',
                'South Edmonton',
                'North Edmonton',
                'West Edmonton',
                'Downtown Edmonton',
                'Mill Woods',
                'Windermere',
                'Terwillegar',
                'Sherwood Park',
                'St. Albert'
              ].map((area) => (
                <div key={area} className="bg-white p-3 rounded-md shadow-sm border border-gray-100 text-gray-700">
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600">We proudly serve all Edmonton neighborhoods with professional carpet installation and repair.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">How much does carpet installation cost in Edmonton?</h3>
                <p className="text-gray-600">Pricing depends on square footage, carpet type, underlay, and installation complexity. Contact us for a detailed quote.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Do you install carpet on stairs?</h3>
                <p className="text-gray-600">Yes. We provide professional stair carpet installation, including full stair coverage and stair runner options.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Do you remove old carpet?</h3>
                <p className="text-gray-600">Yes, we can remove old carpet and prepare the subfloor before installing new carpet.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">How long does carpet installation take?</h3>
                <p className="text-gray-600">Most residential projects can be completed in one day, depending on size and site conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Do you offer carpet installation for businesses?</h3>
                <p className="text-gray-600">Absolutely. We provide commercial carpet installation for offices, retail spaces, and other business properties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Carpet Installers Edmonton</h2>
              <p className="text-gray-600 mb-6">Request a quote for residential or commercial carpet installation in Edmonton, Alberta.</p>
              <div className="space-y-3 text-lg">
                <p>
                  <span className="font-semibold text-gray-800">Phone: </span>
                  <a href="tel:5875681929" className="text-blue-600 hover:text-blue-800">587-568-1929</a>
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Email: </span>
                  <a href="mailto:carpetinstallersedmonton@gmail.com" className="text-blue-600 hover:text-blue-800">carpetinstallersedmonton@gmail.com</a>
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Service Area: </span>
                  Edmonton, Alberta, Canada
                </p>
              </div>
              <p className="mt-6 text-gray-600">Call or send us a message today to request a free quote.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Edmonton Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See why property owners across Edmonton choose us for carpet installation, repairs, and replacement projects.</p>
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