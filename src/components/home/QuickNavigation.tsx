import React from 'react';
import { Link } from 'react-router-dom';
import { Info, GraduationCap, Calendar, Image, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickNavigation = () => {
  const navTiles = [
    {
      id: 1,
      title: 'About Us',
      icon: <Info size={36} className="text-primary-600" />,
      description: 'Learn about our history, mission, and values',
      link: '/about',
      color: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      id: 2,
      title: 'Admissions',
      icon: <BookOpen size={36} className="text-secondary-500" />,
      description: 'Admission process, requirements, and fees',
      link: '/admissions',
      color: 'bg-orange-50 hover:bg-orange-100',
    },
    {
      id: 3,
      title: 'Academic Calendar',
      icon: <Calendar size={36} className="text-accent-500" />,
      description: 'Important dates, holidays, and events',
      link: '/calendar',
      color: 'bg-green-50 hover:bg-green-100',
    },
    {
      id: 4,
      title: 'Gallery',
      icon: <Image size={36} className="text-purple-500" />,
      description: 'Photos of our campus, events, and activities',
      link: '/gallery',
      color: 'bg-purple-50 hover:bg-purple-100',
    },
    {
      id: 5,
      title: 'Our Staff',
      icon: <Users size={36} className="text-indigo-500" />,
      description: 'Meet our dedicated teachers and staff',
      link: '/staff',
      color: 'bg-indigo-50 hover:bg-indigo-100',
    },
    {
      id: 6,
      title: 'Education',
      icon: <GraduationCap size={36} className="text-red-500" />,
      description: 'Curriculum and educational approach',
      link: '/education',
      color: 'bg-red-50 hover:bg-red-100',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Explore BrightFuture School</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover all that our school has to offer, from our educational approach to 
            our vibrant community and facilities.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {navTiles.map((tile) => (
            <motion.div key={tile.id} variants={item}>
              <Link 
                to={tile.link} 
                className={`block rounded-xl p-6 transition-all duration-300 h-full ${tile.color} hover:shadow-md`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">{tile.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tile.title}</h3>
                  <p className="text-gray-600 mb-4">{tile.description}</p>
                  <div className="mt-auto">
                    <span className="text-primary-600 font-medium">Learn more →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickNavigation;