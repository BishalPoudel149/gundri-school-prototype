import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/common/ContactForm';

const AdmissionsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const admissionSteps = [
    {
      title: 'Submit Application',
      description: 'Complete the online application form with all required information and documentation.',
      icon: '📝'
    },
    {
      title: 'Document Review',
      description: 'Our admissions team will review your application and academic records.',
      icon: '📋'
    },
    {
      title: 'Assessment',
      description: 'Students take grade-appropriate assessments in core subjects.',
      icon: '✍️'
    },
    {
      title: 'Interview',
      description: 'Parents and student meet with school administrators for an interview.',
      icon: '👥'
    },
    {
      title: 'Decision',
      description: 'Admission decision communicated within two weeks of completing all steps.',
      icon: '📬'
    },
    {
      title: 'Enrollment',
      description: 'Upon acceptance, complete enrollment forms and pay registration fee.',
      icon: '✅'
    }
  ];

  const requiredDocuments = [
    'Completed application form',
    'Birth certificate',
    'Previous school records (2 years)',
    'Teacher recommendations',
    'Health records and immunizations',
    'Passport-size photographs',
    'Transfer certificate (if applicable)'
  ];

  return (
    <div>
      <PageHeader 
        title="Admissions" 
        subtitle="Join our vibrant learning community"
        backgroundImage="https://images.pexels.com/photos/8617944/pexels-photo-8617944.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our admission process is designed to ensure that we can meet each student's 
              educational needs and that families understand our educational philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="section-title">Required Documents</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span className="text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="section-title">Fee Structure</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Application Fee</h3>
                    <p className="text-gray-600">$100 (non-refundable)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Registration Fee</h3>
                    <p className="text-gray-600">$500 (one-time, upon acceptance)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Annual Tuition</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Nursery & Kindergarten: $12,000</li>
                      <li>Grades 1-5: $14,000</li>
                      <li>Grades 6-9: $16,000</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Additional Fees</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Books and Materials: $500</li>
                      <li>Technology Fee: $300</li>
                      <li>Activities Fee: $400</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Inquiry</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions about admissions? Fill out the form below and our admissions 
              team will get back to you shortly.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your child's journey with BrightFuture School today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              Begin Application
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;