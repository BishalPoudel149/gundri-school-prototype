import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const GalleryPage = () => {
  const categories = ['All', 'Campus Life', 'Events', 'Sports', 'Arts', 'Academics'];
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    {
      url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Academics',
      title: 'Interactive Learning'
    },
    {
      url: 'https://images.pexels.com/photos/8617522/pexels-photo-8617522.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Campus Life',
      title: 'School Building'
    },
    {
      url: 'https://images.pexels.com/photos/8617779/pexels-photo-8617779.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Events',
      title: 'Annual Day Celebration'
    },
    {
      url: 'https://images.pexels.com/photos/8617944/pexels-photo-8617944.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Sports',
      title: 'Sports Day'
    },
    {
      url: 'https://images.pexels.com/photos/8532816/pexels-photo-8532816.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Arts',
      title: 'Art Exhibition'
    },
    {
      url: 'https://images.pexels.com/photos/8532802/pexels-photo-8532802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Campus Life',
      title: 'Library'
    },
    {
      url: 'https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Academics',
      title: 'Science Lab'
    },
    {
      url: 'https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Events',
      title: 'Cultural Program'
    },
    {
      url: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Sports',
      title: 'Basketball Court'
    }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Capturing moments and memories at BrightFuture School"
        backgroundImage="https://images.pexels.com/photos/8532816/pexels-photo-8532816.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold">{image.title}</p>
                    <p className="text-gray-300">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;