import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { services } from '../data/services';
import { ArrowLeft } from 'lucide-react';

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

  return (
    <HelmetProvider>
      <SEO 
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonicalUrl={`/services/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-blue-300 mb-4">
              {service.icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft size={20} className="mr-2" /> Back to All Services
            </Link>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Other Services You May Be Interested In</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 2)
                .map(relatedService => (
                  <div key={relatedService.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-blue-600 mb-4">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <Link 
                      to={`/services/${relatedService.slug}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More
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