import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import QuickNavigation from '../components/home/QuickNavigation';

const HomePage = () => {
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
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Quick Navigation */}
      <QuickNavigation />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <h2 className="section-title">Welcome to BrightFuture School</h2>
              <p className="text-gray-600 mb-6">
                At BrightFuture School, we believe in nurturing young minds to become 
                confident, creative, and compassionate individuals who are prepared for 
                the challenges of tomorrow's world.
              </p>
              <p className="text-gray-600 mb-6">
                Our curriculum is designed to foster academic excellence, critical thinking, 
                and a love for learning, while our supportive community ensures every child 
                feels valued and empowered to reach their full potential.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="order-1 md:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-200">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45+</div>
              <div className="text-gray-200">Expert Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-200">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Levels */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Educational Levels</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide education from Nursery to Grade 9, with a curriculum designed 
              to meet each child's developmental needs at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Nursery',
                description: 'Ages 3-4. Playful learning environment fostering social skills & discovery.',
                image: 'https://images.pexels.com/photos/8363437/pexels-photo-8363437.jpeg?auto=compress&cs=tinysrgb&w=1600',
                color: 'bg-blue-500'
              },
              {
                title: 'Kindergarten',
                description: 'Ages 4-6. Developing early literacy, numeracy & creative expression.',
                image: 'https://images.pexels.com/photos/8363774/pexels-photo-8363774.jpeg?auto=compress&cs=tinysrgb&w=1600',
                color: 'bg-green-500'
              },
              {
                title: 'Primary',
                description: 'Grades 1-5. Building core academic skills & exploring diverse subjects.',
                image: 'https://images.pexels.com/photos/8532802/pexels-photo-8532802.jpeg?auto=compress&cs=tinysrgb&w=1600',
                color: 'bg-yellow-500'
              },
              {
                title: 'Middle School',
                description: 'Grades 6-9. Deeper subject knowledge & developing independent thinking.',
                image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1600',
                color: 'bg-red-500'
              }
            ].map((level, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 ${level.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <img 
                    src={level.image} 
                    alt={level.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{level.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{level.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/education" className="btn-primary">
              Explore Our Educational Programs
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Parents Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from the parents who have entrusted us with their children's education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter has flourished at BrightFuture. The teachers are incredibly dedicated and the curriculum challenges her while making learning fun.",
                author: "Sarah Johnson",
                role: "Parent of Grade 4 Student"
              },
              {
                quote: "The individualized attention my son receives is remarkable. His confidence has grown tremendously since joining BrightFuture School.",
                author: "Michael Chen",
                role: "Parent of Kindergarten Student"
              },
              {
                quote: "We love the community at BrightFuture. The school truly partners with parents in nurturing well-rounded, thoughtful young people.",
                author: "Priya Sharma",
                role: "Parent of Grade 7 Student"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="text-primary-600 text-4xl font-serif mb-4">"</div>
                <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join BrightFuture School?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your child's educational journey with us. Applications for the upcoming 
            academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              Apply Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;