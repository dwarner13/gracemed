import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeClass = "text-blue-600 font-medium";
  const inactiveClass = "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+17804567890" className="hover:underline">780-456-7890</a>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>123 Medical Drive, Edmonton, AB</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>Mon-Fri: 8am-6pm | Sat: 9am-2pm | Sun: Closed</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Grace Family Medical Clinic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              About Us
            </NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Our Doctors
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Services
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Contact
            </NavLink>
          </nav>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => `block px-2 py-1 ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `block px-2 py-1 ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/doctors" 
                className={({ isActive }) => `block px-2 py-1 ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Doctors
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `block px-2 py-1 ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `block px-2 py-1 ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `block px-2 py-1 ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;