import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Grace Family Medical Clinic</h3>
            <p className="mb-4 text-gray-300">Providing quality healthcare services to the Edmonton community since 2005.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/family-medicine-edmonton" className="text-gray-300 hover:text-white transition-colors">Family Medicine</Link>
              </li>
              <li>
                <Link to="/services/walk-in-clinic-edmonton" className="text-gray-300 hover:text-white transition-colors">Walk-in Clinic</Link>
              </li>
              <li>
                <Link to="/services/preventative-care-edmonton" className="text-gray-300 hover:text-white transition-colors">Preventative Care</Link>
              </li>
              <li>
                <Link to="/services/chronic-disease-management-edmonton" className="text-gray-300 hover:text-white transition-colors">Chronic Disease Management</Link>
              </li>
              <li>
                <Link to="/services/womens-health-edmonton" className="text-gray-300 hover:text-white transition-colors">Women's Health</Link>
              </li>
              <li>
                <Link to="/services/pediatric-care-edmonton" className="text-gray-300 hover:text-white transition-colors">Pediatric Care</Link>
              </li>
              <li>
                <Link to="/services/wcb-claims-support-edmonton" className="text-gray-300 hover:text-white transition-colors">WCB Claims Support</Link>
              </li>
              <li>
                <Link to="/services/occupational-injury-service-edmonton" className="text-gray-300 hover:text-white transition-colors">Occupational Injury Service (OIS)</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Medical Drive, Edmonton, AB T5J 1A1</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+17804567890" className="hover:underline">780-456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@gracefamilymedicalclinic.com" className="hover:underline">info@gracefamilymedicalclinic.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Monday-Friday: 8am-6pm</p>
                  <p>Saturday: 9am-2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Grace Family Medical Clinic. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;