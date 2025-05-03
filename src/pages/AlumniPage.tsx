import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const AlumniPage = () => {
  const alumni = [
    {
      name: 'Sarah Chen',
      graduationYear: 2015,
      currentRole: 'Software Engineer at Google',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'The foundation I received at BrightFuture School prepared me well for the challenges of university and my career in tech.',
      achievements: [
        'Bachelor\'s in Computer Science from Stanford',
        'Led award-winning robotics team',
        'Published research paper on AI'
      ]
    },
    {
      name: 'Michael Rodriguez',
      graduationYear: 2016,
      currentRole: 'Medical Resident at Johns Hopkins',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'The emphasis on both academics and character development at BrightFuture shaped my approach to medicine and patient care.',
      achievements: [
        'MD from Harvard Medical School',
        'Research in pediatric oncology',
        'Healthcare volunteer in underserved communities'
      ]
    },
    {
      name: 'Emma Thompson',
      graduationYear: 2017,
      currentRole: 'Environmental Scientist',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'My passion for environmental conservation was sparked during the science projects at BrightFuture. Now I\'m working to make a difference.',
      achievements: [
        'Master\'s in Environmental Science',
        'Led climate change research project',
        'Published in Nature journal'
      ]
    },
    {
      name: 'David Kim',
      graduationYear: 2014,
      currentRole: 'Entrepreneur & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'The leadership opportunities at BrightFuture helped me develop the skills I use every day as an entrepreneur.',
      achievements: [
        'Founded successful tech startup',
        'Featured in Forbes 30 Under 30',
        'Angel investor in education technology'
      ]
    }
  ];

  const achievements = [
    {
      category: 'Academic Excellence',
      stats: '95%',
      description: 'of our alumni attend top-tier universities'
    },
    {
      category: 'Career Success',
      stats: '80%',
      description: 'secure positions in their chosen field within 6 months'
    },
    {
      category: 'Global Presence',
      stats: '40+',
      description: 'countries where our alumni are making an impact'
    },
    {
      category: 'Leadership',
      stats: '60%',
      description: 'hold leadership positions in their organizations'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Alumni Success Stories" 
        subtitle="Our graduates are making their mark across the globe"
        backgroundImage="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Alumni</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet some of our outstanding graduates who are making significant contributions 
              in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumni.map((alum, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={alum.image} 
                      alt={alum.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{alum.name}</h3>
                      <span className="text-gray-500">Class of {alum.graduationYear}</span>
                    </div>
                    <p className="text-primary-600 font-medium mb-3">{alum.currentRole}</p>
                    <p className="text-gray-600 italic mb-4">"{alum.quote}"</p>
                    <div className="space-y-2">
                      {alum.achievements.map((achievement, aIndex) => (
                        <p key={aIndex} className="text-gray-600 flex items-center">
                          <span className="text-primary-600 mr-2">•</span>
                          {achievement}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Alumni Impact</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our alumni continue to achieve remarkable success across various fields and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {achievement.stats}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.category}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title">Join Our Alumni Network</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Are you a BrightFuture School graduate? Connect with fellow alumni, share your story, 
            and stay updated on school news and events.
          </p>
          <button className="btn-primary">
            Connect With Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;