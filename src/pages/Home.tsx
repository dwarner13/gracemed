import React from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import ClinicImage from '../components/ClinicImage';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { services } from '../data/services';
import { clinic } from '../data/clinic';
import {
  Heart,
  Users,
  Clock,
  Award,
  ArrowRight,
  Phone,
  Calendar,
  ShieldCheck,
  Sparkles,
  DoorClosed,
  Stethoscope,
  Smile,
  CheckCircle2,
  Mail,
  MapPin,
} from 'lucide-react';

const Home = () => {
  // Featured services (first 3)
  const featuredServices = services.slice(0, 3);

  return (
    <HelmetProvider>
      <SEO
        title="Grace Family Medical Clinic | Family Doctor Edmonton"
        description="Grace Family Medical Clinic in Edmonton provides comprehensive healthcare services including family medicine, walk-in clinic, preventative care, and chronic disease management."
        keywords="family doctor Edmonton, medical clinic Edmonton, walk-in clinic Edmonton, healthcare services Edmonton"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Authentic clinic exterior background */}
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
          {/* Subtle dark overlay (~40%) keeps white text readable */}
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/45 to-slate-950/20" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl text-white">
            <span className="hero-fade inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm ring-1 ring-white/25">
              <ShieldCheck size={16} /> Trusted family care in Edmonton
            </span>
            <h1 className="hero-fade mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: '80ms' }}>
              Compassionate Family Healthcare in Edmonton
            </h1>
            <p className="hero-fade mt-6 max-w-xl text-lg text-blue-50/90 sm:text-xl" style={{ animationDelay: '160ms' }}>
              Providing trusted family medicine, walk-in medical care, chronic disease management,
              preventive healthcare, and compassionate care for patients of all ages.
            </p>
            <div className="hero-fade mt-9 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '240ms' }}>
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-lg font-semibold text-blue-700 shadow-lg shadow-blue-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                <Calendar size={20} /> Book Appointment
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-7 py-3.5 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Phone size={20} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: 'Experienced Doctors', text: 'Our team of highly qualified physicians provides expert care for your entire family.' },
              { icon: Clock, title: 'Convenient Hours', text: 'Extended hours and Saturday appointments to accommodate your busy schedule.' },
              { icon: Heart, title: 'Comprehensive Care', text: 'From preventative care to chronic disease management, we address all your health needs.' },
              { icon: Award, title: 'Patient-Centered', text: 'We take the time to listen, understand your concerns, and provide personalized care.' },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome / About Section — reception desk */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
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
            <Reveal delay={100}>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Welcome to our clinic
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Warm Welcome the Moment You Arrive
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                From the moment you step through our doors, you're welcomed into a modern, clean, and
                friendly clinic designed with your comfort in mind. Our bright, calming reception sets
                the tone for the personalized, compassionate care our team is known for.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Whether you're here for a routine check-up or ongoing care, our welcoming environment
                is built to help every patient — and every family — feel right at home.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Learn more about us <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Modern Examination Rooms — hallway with exam rooms */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
                <ClinicImage
                  name="grace-family-medical-clinic-exam-rooms"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Modern examination rooms at Grace Family Medical Clinic"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="order-2 lg:order-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our facilities
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Modern Examination Rooms
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Our clinic features private, thoughtfully designed examination rooms that combine
                comfort with modern medical facilities — giving you a calm, focused space for your care.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: DoorClosed, text: 'Private rooms' },
                  { icon: Heart, text: 'Comfortable environment' },
                  { icon: Sparkles, text: 'Clean facilities' },
                  { icon: Stethoscope, text: 'Modern equipment' },
                  { icon: Users, text: 'Patient-first experience' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <item.icon size={18} />
                    </span>
                    <span className="font-medium text-gray-800">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Friendly Administrative Team — reception office */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
                <ClinicImage
                  name="grace-family-medical-clinic-reception-office"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Administrative reception area at Grace Family Medical Clinic"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Here to help
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Friendly Administrative Team
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Our administrative team is the friendly face of Grace Family Medical Clinic — ready to
                make every visit smooth, efficient, and stress-free from check-in to follow-up.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Appointment scheduling',
                  'Helpful administrative staff',
                  'Efficient patient check-in',
                  'Professional service',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={22} className="shrink-0 text-blue-600" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a wide range of medical services to meet the healthcare needs of your entire family.
            </p>
          </Reveal>

          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                />
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-lg font-semibold text-blue-600 transition hover:text-blue-800"
            >
              View All Services <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workplace Injury Services Highlight */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Workplace Injuries & WCB Support
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Fast, structured care for job-related injuries with clear treatment plans and return-to-work guidance.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-semibold text-blue-600">
                    WCB Claims & Return-to-Work Support
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Timely workplace injury assessments, documentation support, and practical modified-duty planning.
                  </p>
                  <Link
                    to="/services/wcb-claims-support-edmonton"
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                  >
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-semibold text-blue-600">
                    Occupational Injury Service (OIS)
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Focused care for work-related injuries with follow-up planning and coordinated communication.
                  </p>
                  <Link
                    to="/services/occupational-injury-service-edmonton"
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                  >
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — Inside Grace Family Medical Clinic */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              <Smile size={16} /> A look around
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Inside Grace Family Medical Clinic
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take a look inside our modern Edmonton clinic — from our welcoming reception to our
              private examination rooms.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'grace-family-medical-clinic-exterior', alt: 'Grace Family Medical Clinic exterior in Edmonton Alberta', w: 1280, h: 591, span: 'sm:col-span-2', widths: [768, 1280, 1920] },
              { name: 'grace-family-medical-clinic-reception', alt: 'Reception desk at Grace Family Medical Clinic', w: 1280, h: 960 },
              { name: 'grace-family-medical-clinic-exam-rooms', alt: 'Modern examination rooms at Grace Family Medical Clinic', w: 1280, h: 960 },
              { name: 'grace-family-medical-clinic-hallway', alt: 'Private examination room hallway at Grace Family Medical Clinic', w: 1280, h: 960 },
              { name: 'grace-family-medical-clinic-reception-office', alt: 'Administrative reception area at Grace Family Medical Clinic', w: 1280, h: 960 },
            ].map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 80} className={item.span ?? ''}>
                <div className="group h-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-900/5">
                  <ClinicImage
                    name={item.name}
                    widths={item.widths}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Get in touch
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Have a Question? We're Here to Help
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Send us a quick message and our friendly team will get back to you during clinic hours.
                For urgent medical concerns, please call 911 or visit your nearest emergency department.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Phone size={18} />
                  </span>
                  <a href={clinic.phoneHref} className="text-lg font-medium hover:text-blue-600">
                    {clinic.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Mail size={18} />
                  </span>
                  <a href={clinic.emailHref} className="text-lg font-medium break-all hover:text-blue-600">
                    {clinic.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <MapPin size={18} />
                  </span>
                  <span className="text-lg">
                    {clinic.addressLine1}, {clinic.addressLine2}
                  </span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm variant="compact" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </HelmetProvider>
  );
};

export default Home;
