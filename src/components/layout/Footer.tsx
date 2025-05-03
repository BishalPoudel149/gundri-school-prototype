import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-secondary-500">Bright</span>Future School
            </h3>
            <p className="text-gray-300 mb-4">
              Nurturing young minds and building bright futures since 1995. We provide quality education from Nursery to Grade 9.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-300 hover:text-white transition-colors">Educational Offerings</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/calendar" className="text-gray-300 hover:text-white transition-colors">Academic Calendar</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-300 hover:text-white transition-colors">Our Staff</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-secondary-500" />
                <span className="text-gray-300">123 Education Street, School District, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary-500" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary-500" />
                <a href="mailto:info@brightfutureschool.com" className="text-gray-300 hover:text-white transition-colors">info@brightfutureschool.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-secondary-500" />
                <div className="text-gray-300">
                  <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                  <p>Saturday: 9:00 AM - 12:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and events.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400">
            &copy; {currentYear} BrightFuture School. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors mx-2">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;