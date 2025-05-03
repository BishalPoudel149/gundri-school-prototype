import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const EducationPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const levels = [
    {
      title: 'Nursery (Ages 3-4)',
      description: 'A nurturing environment where young learners begin their educational journey through play-based learning, developing social skills and early cognitive abilities.',
      features: [
        'Play-based learning approach',
        'Development of social skills',
        'Basic numeracy and literacy',
        'Creative arts and music',
        'Physical development activities'
      ],
      image: 'https://images.pexels.com/photos/8422164/pexels-photo-8422164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Kindergarten (Ages 4-6)',
      description: 'A structured yet playful environment where children develop fundamental academic and social skills through guided exploration and creative activities.',
      features: [
        'Early reading and writing',
        'Basic mathematics',
        'Science exploration',
        'Arts and crafts',
        'Physical education'
      ],
      image: 'https://images.pexels.com/photos/8466778/pexels-photo-8466778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    
    {
      title: 'Primary School (Grades 1-5)',
      description: 'A comprehensive curriculum that builds strong academic foundations while nurturing creativity, critical thinking, and personal development.',
      features: [
        'Core subjects (Math, Science, Language)',
        'Project-based learning',
        'Technology integration',
        'Sports and physical education',
        'Arts and music programs'
      ],
      image: 'https://images.pexels.com/photos/5428267/pexels-photo-5428267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Middle School (Grades 6-9)',
      description: 'An engaging curriculum that prepares students for higher education while developing independent thinking and personal responsibility.',
      features: [
        'Advanced core subjects',
        'Research projects',
        'STEM programs',
        'Leadership development',
        'Career exploration'
      ],
      image: 'https://images.pexels.com/photos/6334064/pexels-photo-6334064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Educational Programs" 
        subtitle="Comprehensive education from Nursery to Grade 9"
        backgroundImage="https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Educational Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At BrightFuture School, we believe in providing a holistic education that nurtures 
              academic excellence, character development, and life skills. Our curriculum is designed 
              to meet each student's unique needs while preparing them for future success.
            </p>
          </div>

          <div className="space-y-16">
            {levels.map((level, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
                  <p className="text-gray-600 mb-6">{level.description}</p>
                  <ul className="space-y-3">
                    {level.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Extracurricular Activities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of extracurricular activities to help students discover 
              and develop their talents beyond academics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sports',
                description: 'Various sports including soccer, basketball, swimming, and athletics.',
                icon: '🏃‍♂️'
              },
              {
                title: 'Arts & Music',
                description: 'Visual arts, music lessons, choir, and drama productions.',
                icon: '🎨'
              },
              {
                title: 'STEM Club',
                description: 'Robotics, coding, and science experiments.',
                icon: '🤖'
              },
              {
                title: 'Language Club',
                description: 'Foreign language learning and cultural exchange.',
                icon: '🌍'
              },
              {
                title: 'Environmental Club',
                description: 'Environmental awareness and sustainability projects.',
                icon: '🌱'
              },
              {
                title: 'Leadership Program',
                description: 'Student council and community service initiatives.',
                icon: '👥'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;