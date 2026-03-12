import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showPhone?: boolean;
  onButtonClick?: () => void;
}

const CTA = ({
  title = "Ready to Schedule Your Appointment?",
  subtitle = "Our team of healthcare professionals is here to provide you with the best medical care.",
  buttonText = "Book an Appointment",
  buttonLink = "/contact",
  showPhone = true,
  onButtonClick
}: CTAProps) => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {onButtonClick ? (
            <button
              type="button"
              onClick={onButtonClick}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition duration-300"
            >
              {buttonText}
            </button>
          ) : (
            <Link 
              to={buttonLink} 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition duration-300"
            >
              {buttonText}
            </Link>
          )}
          
          {showPhone && (
            <a 
              href="tel:+17804567890" 
              className="flex items-center text-white border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium text-lg transition duration-300"
            >
              <Phone size={20} className="mr-2" />
              Call 780-456-7890
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;