import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import ClinicImage from '../components/ClinicImage';
import Reveal from '../components/Reveal';
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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ClinicImage
            name="grace-family-medical-clinic-exterior"
            widths={[768, 1280, 1920]}
            sizes="100vw"
            alt="Grace Family Medical Clinic exterior in Edmonton Alberta"
            width={1920}
            height={886}
            eager
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-slate-950/30" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-28">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="hero-fade text-4xl font-bold tracking-tight sm:text-5xl">
              About Grace Family Medical Clinic
            </h1>
            <p className="hero-fade mt-5 text-xl text-blue-50/90" style={{ animationDelay: '120ms' }}>
              Providing compassionate, comprehensive healthcare to the Edmonton community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission & Vision
              </h2>
              <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold text-blue-600">Our Mission</h3>
                <p className="leading-relaxed text-gray-600">
                  To provide exceptional, patient-centered healthcare services that improve the health
                  and well-being of our community. We are committed to treating each patient with
                  dignity, respect, and compassion while delivering the highest quality medical care.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold text-blue-600">Our Vision</h3>
                <p className="leading-relaxed text-gray-600">
                  To be the leading family medical clinic in Edmonton, recognized for our clinical
                  excellence, compassionate care, and commitment to improving the health of our
                  community. We strive to create a healthcare environment where patients feel valued,
                  heard, and empowered to take an active role in their health.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
                <ClinicImage
                  name="grace-family-medical-clinic-reception"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Reception desk at Grace Family Medical Clinic"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These principles guide everything we do at Grace Family Medical Clinic.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, title: 'Compassion', text: 'We treat each patient with kindness, empathy, and respect, recognizing that illness can be a vulnerable time in a person\'s life.' },
              { icon: Award, title: 'Excellence', text: 'We are committed to providing the highest quality medical care based on current evidence and best practices.' },
              { icon: Users, title: 'Patient-Centered', text: 'We place patients at the center of everything we do, involving them in decisions about their health and respecting their preferences.' },
              { icon: Shield, title: 'Integrity', text: 'We adhere to the highest ethical standards and are honest, transparent, and accountable in all our interactions.' },
              { icon: Clock, title: 'Accessibility', text: 'We strive to make healthcare accessible to all through convenient hours, same-day appointments, and inclusive practices.' },
              { icon: MapPin, title: 'Community', text: 'We are committed to serving and improving the health of our local Edmonton community through education and outreach.' },
            ].map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <value.icon size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story — second hallway photo */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
                <ClinicImage
                  name="grace-family-medical-clinic-hallway"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Modern examination room hallway at Grace Family Medical Clinic in Edmonton"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                Grace Family Medical Clinic was established with a vision to provide comprehensive,
                patient-centered healthcare to the Edmonton community.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                We are committed to compassionate care, clinical excellence, and community service, and
                we continue to grow our team and services to meet the diverse healthcare needs of the
                patients we serve.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Grace Family Medical Clinic offers a wide range of medical services delivered by a team
                of dedicated healthcare professionals who are committed to improving the health and
                well-being of our community.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Space — remaining clinic photos */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Space</h2>
            <p className="mt-4 text-lg text-gray-600">
              A modern, comfortable environment designed to put every patient at ease.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'grace-family-medical-clinic-exam-rooms', alt: 'Modern examination rooms at Grace Family Medical Clinic' },
              { name: 'grace-family-medical-clinic-reception-office', alt: 'Administrative reception area at Grace Family Medical Clinic' },
              { name: 'grace-family-medical-clinic-reception', alt: 'Reception desk at Grace Family Medical Clinic' },
            ].map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-900/5">
                  <ClinicImage
                    name={item.name}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={item.alt}
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Grace Family Medical Clinic
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing exceptional healthcare services with a patient-centered approach.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { title: 'Experienced Healthcare Team', text: 'Our team of physicians, nurses, and support staff brings decades of combined experience in family medicine and primary care. We are committed to ongoing education and training to ensure we provide the most current, evidence-based care.' },
              { title: 'Comprehensive Services', text: 'We offer a wide range of medical services under one roof, from preventative care and routine check-ups to chronic disease management and specialized services. This integrated approach ensures coordinated, continuous care for all your health needs.' },
              { title: 'Patient-Centered Approach', text: 'We believe in treating the whole person, not just the illness. We take the time to listen to your concerns, answer your questions, and involve you in decisions about your healthcare. Your comfort and well-being are our top priorities.' },
              { title: 'Convenient Care', text: 'We understand that accessing healthcare should be easy. That\'s why we offer extended hours, same-day appointments for urgent issues, online booking options, and a central Edmonton location with ample parking.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
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
