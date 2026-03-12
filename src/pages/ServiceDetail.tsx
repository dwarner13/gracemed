import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { services } from '../data/services';
import { ArrowLeft, ArrowRight, CalendarCheck2, PhoneCall, ShieldCheck } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the service with the matching slug
  const service = services.find(s => s.slug === slug);
  
  // If service not found, redirect to services page
  if (!service) {
    React.useEffect(() => {
      navigate('/services', { replace: true });
    }, [navigate]);
    
    return null;
  }

  const highlightedPoints = service.fullDescription
    .match(/<li>(.*?)<\/li>/g)?.map((item) =>
      item
        .replace(/<\/?li>/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter(Boolean)
    .slice(0, 5) ?? [];

  return (
    <HelmetProvider>
      <SEO 
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonicalUrl={`/services/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-2xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
              Trusted care in Edmonton
            </span>
            <div className="mx-auto mt-5 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-cyan-100">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">{service.shortDescription}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition"
              >
                Book Appointment <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="tel:+17804567890"
                className="inline-flex items-center rounded-md border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Call 780-456-7890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
              <ArrowLeft size={20} className="mr-2" /> Back to All Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="service-rich-content" dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
              </div>

              <aside className="space-y-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Patients Choose Us</h3>
                  <ul className="space-y-3">
                    {highlightedPoints.length > 0 ? (
                      highlightedPoints.map((point) => (
                        <li key={point} className="flex items-start text-sm text-gray-600">
                          <ShieldCheck size={16} className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-600">Personalized, evidence-based care for your health needs.</li>
                    )}
                  </ul>
                </div>

                <div className="bg-blue-600 text-white rounded-2xl p-5 shadow-md">
                  <h3 className="text-lg font-semibold mb-3">Need an appointment?</h3>
                  <p className="text-blue-50 text-sm mb-4">Our team can help you book the right visit quickly.</p>
                  <div className="space-y-2">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center rounded-md bg-white text-blue-700 py-2.5 text-sm font-semibold hover:bg-blue-50 transition"
                    >
                      <CalendarCheck2 size={16} className="mr-2" />
                      Book Now
                    </Link>
                    <a
                      href="tel:+17804567890"
                      className="w-full inline-flex items-center justify-center rounded-md border border-white/70 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
                    >
                      <PhoneCall size={16} className="mr-2" />
                      Call Clinic
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Other Services You May Be Interested In</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 2)
                .map(relatedService => (
                  <div key={relatedService.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="text-blue-600 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <Link 
                      to={`/services/${relatedService.slug}`} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={`Ready to Schedule Your ${service.title} Appointment?`}
        subtitle="Contact us today to book an appointment with one of our experienced healthcare providers."
      />
    </HelmetProvider>
  );
};

export default ServiceDetail;