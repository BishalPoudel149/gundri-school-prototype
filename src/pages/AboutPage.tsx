import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const AboutPage = () => {
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
        title="About BrightFuture School" 
        subtitle="Learn about our history, mission, and values that guide us every day."
        backgroundImage="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-4">
                BrightFuture School was founded in 1995 with a vision to create a 
                learning environment where children could thrive academically, 
                socially, and emotionally.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with just 50 students and 5 teachers, we have grown into 
                a vibrant educational community with over 500 students and 45 dedicated 
                educators, all while maintaining our commitment to personalized attention 
                and excellence in education.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a steadfast dedication to nurturing 
                young minds, embracing innovation in education, and building a 
                supportive community where every child feels valued and inspired to 
                reach their potential.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="School building" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide a nurturing and stimulating learning environment that 
                empowers each student to achieve academic excellence, develop a 
                love for learning, and become responsible global citizens who make 
                positive contributions to society.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a leading educational institution that nurtures 
                innovative thinkers, compassionate leaders, and lifelong learners who 
                are prepared to thrive in an ever-changing global society while 
                maintaining a strong sense of integrity and respect for diversity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title">Principal's Welcome Message</h2>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/5212696/pexels-photo-5212696.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Principal" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-gray-600 italic mb-4">
                  "Welcome to BrightFuture School, where we believe in the unlimited potential 
                  of every child. Our dedicated team of educators is committed to providing a 
                  holistic education that nurtures not just academic excellence, but also 
                  character, creativity, and compassion.
                </blockquote>
                <blockquote className="text-gray-600 italic mb-6">
                  At BrightFuture, we create an environment where curiosity is encouraged, 
                  questions are celebrated, and learning is a joyful journey. We partner with 
                  parents to help each child discover their unique talents and develop the 
                  skills they need to succeed in an ever-changing world.
                </blockquote>
                <div>
                  <p className="font-semibold">Dr. Emily Johnson</p>
                  <p className="text-gray-500">Principal, BrightFuture School</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do at BrightFuture School, from curriculum 
              design to daily interactions with our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We pursue the highest standards in education and encourage our students to strive for their personal best in everything they do.',
                icon: '🏆',
                color: 'bg-blue-50'
              },
              {
                title: 'Integrity',
                description: 'We promote honesty, ethics, and accountability in all aspects of school life, fostering trust within our community.',
                icon: '🤝',
                color: 'bg-green-50'
              },
              {
                title: 'Empathy',
                description: 'We cultivate understanding, compassion, and respect for others, celebrating diversity and promoting inclusivity.',
                icon: '❤️',
                color: 'bg-red-50'
              },
              {
                title: 'Innovation',
                description: 'We embrace creativity, critical thinking, and adaptability, preparing students for a future of constant change and opportunity.',
                icon: '💡',
                color: 'bg-yellow-50'
              },
              {
                title: 'Responsibility',
                description: 'We encourage personal and social responsibility, teaching students to make positive contributions to their community and the world.',
                icon: '🌍',
                color: 'bg-purple-50'
              },
              {
                title: 'Growth Mindset',
                description: 'We believe in the power of perseverance, resilience, and the ability to learn from challenges and mistakes.',
                icon: '🌱',
                color: 'bg-indigo-50'
              },
              {
                title: 'Collaboration',
                description: 'We value teamwork, communication, and the strength that comes from working together toward common goals.',
                icon: '👥',
                color: 'bg-orange-50'
              },
              {
                title: 'Joy of Learning',
                description: 'We foster curiosity, enthusiasm, and a lifelong love of learning that extends beyond the classroom.',
                icon: '📚',
                color: 'bg-teal-50'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className={`p-6 rounded-lg ${value.color}`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;