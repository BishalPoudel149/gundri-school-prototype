import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const sliderData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/8617944/pexels-photo-8617944.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Welcome to BrightFuture School',
    subtitle: 'Nurturing Young Minds for Tomorrow\'s World',
    cta: 'Explore Our School',
    link: '/about',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8617522/pexels-photo-8617522.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Quality Education for All',
    subtitle: 'From Nursery to Grade 9 with Exceptional Curriculum',
    cta: 'View Our Programs',
    link: '/education',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/8617779/pexels-photo-8617779.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Join Our Community',
    subtitle: 'Application Process Now Open for New Students',
    cta: 'Apply Now',
    link: '/admissions',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative h-screen max-h-[800px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-full w-full"
        onSlideChange={handleSlideChange}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative h-full flex items-center container-custom">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white max-w-2xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={slide.link} className="btn-primary flex items-center gap-2">
                    {slide.cta} <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn-outline text-white border-white hover:bg-white/10">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;