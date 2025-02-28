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
        title="Our Doctors | Grace Family Medical Clinic Edmonton"
        description="Meet our team of experienced physicians at Grace Family Medical Clinic in Edmonton. Our doctors are committed to providing exceptional, patient-centered healthcare."
        keywords="doctors Edmonton, family physicians Edmonton, medical team, healthcare providers Edmonton"
        canonicalUrl="/doctors"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Doctors</h1>
            <p className="text-xl">Meet our team of experienced physicians dedicated to providing exceptional healthcare for you and your family.</p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
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

      {/* Team Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team Approach to Healthcare</h2>
              <p className="text-gray-600 mb-4">At Grace Family Medical Clinic, we believe in a collaborative approach to healthcare. Our physicians work together as a team, consulting with each other and sharing expertise to ensure you receive the best possible care.</p>
              <p className="text-gray-600 mb-4">This team-based approach means that even if your primary physician is unavailable, another doctor in our clinic can access your medical records and provide consistent care based on your established treatment plan.</p>
              <p className="text-gray-600">Our physicians are supported by a dedicated team of nurses, medical assistants, and administrative staff who are committed to making your experience at our clinic as comfortable and efficient as possible.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Medical team discussion" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Continuing Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Commitment to Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our physicians are committed to staying at the forefront of medical knowledge and practice.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">All physicians at Grace Family Medical Clinic participate in ongoing continuing medical education to stay current with the latest advancements in healthcare. This commitment to lifelong learning ensures that our patients receive the most up-to-date, evidence-based care available.</p>
            <p className="text-gray-600 mb-4">Our doctors regularly attend medical conferences, participate in professional development workshops, and engage in peer review activities. Many of our physicians also contribute to medical research and education, serving as clinical instructors for medical students and residents from the University of Alberta.</p>
            <p className="text-gray-600">This dedication to excellence in medical knowledge and practice translates into better care for our patients, with access to the latest treatment options and preventative care strategies.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Find Your Healthcare Partner" 
        subtitle="Schedule an appointment with one of our experienced physicians today and take the first step toward better health."
      />
    </HelmetProvider>
  );
};

export default Doctors;