import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import DoctorCard from '../components/DoctorCard';
import CTA from '../components/CTA';
import { doctors } from '../data/doctors';

const Doctors = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Stair Carpet Installation Edmonton | Safe, Clean, Precision Fit"
        description="Expert stair carpet installation in Edmonton with precise measurements, secure fitting, and clean finishing for straight, curved, and landing stairs."
        keywords="stair carpet installation Edmonton, stair runner installation Edmonton, carpet on stairs Edmonton, stair carpet installers"
        canonicalUrl="/doctors"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Stair Carpet Installation</h1>
            <p className="text-xl">Professional stair carpet installation in Edmonton for safer steps, cleaner finishes, and long-term durability.</p>
          </div>
        </div>
      </section>

      {/* Stair Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {doctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id}
                name={doctor.name}
                title={doctor.title}
                image={doctor.image}
                specialties={doctor.specialties}
                bio={doctor.bio}
                education={doctor.education}
                availability={doctor.availability}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Installation Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Stair Carpet Installation Process</h2>
              <p className="text-gray-600 mb-4">We start with detailed stair measurements and material recommendations based on traffic levels, stair shape, and your preferred style.</p>
              <p className="text-gray-600 mb-4">Our team then installs each section with proper tension and fastening methods to reduce movement, wear, and edge lifting over time.</p>
              <p className="text-gray-600">Final finishing includes alignment checks, transition cleanup, and a full walkthrough to ensure your Edmonton stair carpet installation is completed correctly.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1682448227631-b44e89a2bd74?auto=format&fit=crop&w=1350&q=80" 
                alt="Stair carpet installation process in Edmonton" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Stair Carpet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Stair Carpet Is a Smart Edmonton Upgrade</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stair carpet adds comfort, improves traction, and can reduce visible wear on high-traffic staircases.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">In Edmonton homes, stairs see concentrated wear. Proper stair carpet installation protects treads and risers while improving everyday comfort and reducing slip risk.</p>
            <p className="text-gray-600 mb-4">We help you choose carpet style, pile, and underlay that balance appearance and performance. Our team can install full stair carpeting or stair runner layouts depending on your design goals.</p>
            <p className="text-gray-600">If your current stair carpet is loose, wrinkled, or separating at seams, we can recommend repair or replacement options that restore safety and appearance.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Need Stair Carpet Installation in Edmonton?" 
        subtitle="Request a quote for precise stair carpet fitting, clean finishing, and reliable installation timelines."
      />
    </HelmetProvider>
  );
};

export default Doctors;