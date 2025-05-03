import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/common/ContactForm';

const ContactPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to answer your questions and help you learn more about our school."
        backgroundImage="https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 text-primary-600" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      School District<br />
                      City, Country 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-3 mt-1 text-primary-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      Main: (123) 456-7890<br />
                      Admissions: (123) 456-7891
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mr-3 mt-1 text-primary-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@brightfutureschool.com" className="hover:text-primary-600 transition-colors">
                        info@brightfutureschool.com
                      </a><br />
                      <a href="mailto:admissions@brightfutureschool.com" className="hover:text-primary-600 transition-colors">
                        admissions@brightfutureschool.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="mr-3 mt-1 text-primary-600" />
                  <div>
                    <h3 className="font-semibold">School Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users size={20} className="mr-3 mt-1 text-primary-600" />
                  <div>
                    <h3 className="font-semibold">Admissions Office</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 3:00 PM<br />
                      Or by appointment
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title">Find Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our campus is conveniently located in the heart of the city, easily accessible by public transportation.
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1661794083803!5m2!1sen!2suk" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;