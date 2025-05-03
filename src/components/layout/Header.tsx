import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Staff', path: '/staff' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        {/* Top Info Bar */}
        <div className={`hidden md:flex justify-end items-center gap-6 pb-2 text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-primary-500 transition-colors">
            <Phone size={14} /> (123) 456-7890
          </a>
          <a href="mailto:info@brightfutureschool.com" className="flex items-center gap-1 hover:text-primary-500 transition-colors">
            <Mail size={14} /> info@brightfutureschool.com
          </a>
        </div>

        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`font-heading font-bold text-xl ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              <span className="text-secondary-500">Bright</span>Future School
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                    : 'text-white hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-2 btn-primary"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50 font-medium'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  className="btn-primary text-center mt-4"
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;