import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { Clock, MapPin, Award, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="About Us | Grace Family Medical Clinic Edmonton"
        description="Learn about Grace Family Medical Clinic in Edmonton. Our mission, values, and commitment to providing exceptional healthcare services to our community."
        keywords="about Grace Family Medical Clinic, Edmonton medical clinic, family doctor Edmonton, healthcare services Edmonton"
        canonicalUrl="/about"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Grace Family Medical Clinic</h1>
            <p className="text-xl">Providing compassionate, comprehensive healthcare to the Edmonton community since 2005.</p>
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
                <p className="text-gray-600">To provide exceptional, patient-centered healthcare services that improve the health and well-being of our community. We are committed to treating each patient with dignity, respect, and compassion while delivering the highest quality medical care.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the leading family medical clinic in Edmonton, recognized for our clinical excellence, compassionate care, and commitment to improving the health of our community. We strive to create a healthcare environment where patients feel valued, heard, and empowered to take an active role in their health.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Medical professionals in a meeting" 
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide everything we do at Grace Family Medical Clinic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Heart size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">We treat each patient with kindness, empathy, and respect, recognizing that illness can be a vulnerable time in a person's life.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We are committed to providing the highest quality medical care based on current evidence and best practices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
              <p className="text-gray-600">We place patients at the center of everything we do, involving them in decisions about their health and respecting their preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">We adhere to the highest ethical standards and are honest, transparent, and accountable in all our interactions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">We strive to make healthcare accessible to all members of our community through convenient hours, same-day appointments, and inclusive practices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We are committed to serving and improving the health of our local Edmonton community through education, outreach, and partnerships.</p>
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
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Medical clinic building" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">Grace Family Medical Clinic was founded in 2005 by Dr. Sarah Johnson with a vision to provide comprehensive, patient-centered healthcare to the Edmonton community. What began as a small practice with just two physicians has grown into a trusted medical home for thousands of patients in the Edmonton area.</p>
              <p className="text-gray-600 mb-4">Over the years, we have expanded our team and services to better meet the diverse healthcare needs of our growing patient population. Despite our growth, we have remained true to our founding principles of compassionate care, clinical excellence, and community service.</p>
              <p className="text-gray-600">Today, Grace Family Medical Clinic is proud to be a leading healthcare provider in Edmonton, offering a wide range of medical services delivered by a team of dedicated healthcare professionals who are committed to improving the health and well-being of our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Grace Family Medical Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're committed to providing exceptional healthcare services with a patient-centered approach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Experienced Healthcare Team</h3>
              <p className="text-gray-600">Our team of physicians, nurses, and support staff brings decades of combined experience in family medicine and primary care. We are committed to ongoing education and training to ensure we provide the most current, evidence-based care.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Comprehensive Services</h3>
              <p className="text-gray-600">We offer a wide range of medical services under one roof, from preventative care and routine check-ups to chronic disease management and specialized services. This integrated approach ensures coordinated, continuous care for all your health needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Patient-Centered Approach</h3>
              <p className="text-gray-600">We believe in treating the whole person, not just the illness. We take the time to listen to your concerns, answer your questions, and involve you in decisions about your healthcare. Your comfort and well-being are our top priorities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Convenient Care</h3>
              <p className="text-gray-600">We understand that accessing healthcare should be easy. That's why we offer extended hours, same-day appointments for urgent issues, online booking options, and a central Edmonton location with ample parking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Experience Better Healthcare?" 
        subtitle="Schedule an appointment with one of our caring physicians and discover the Grace Family Medical Clinic difference."
      />
    </HelmetProvider>
  );
};

export default About;