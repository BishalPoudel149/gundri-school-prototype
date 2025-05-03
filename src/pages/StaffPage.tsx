import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const StaffPage = () => {
  const staff = [
    {
      name: 'Dr. Emily Johnson',
      role: 'Principal',
      image: 'https://images.pexels.com/photos/5212696/pexels-photo-5212696.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'Education is not just about academics; it\'s about nurturing well-rounded individuals who can make a positive impact on society.',
      education: 'Ph.D. in Educational Leadership',
      experience: '20+ years in education'
    },
    {
      name: 'Mr. David Chen',
      role: 'Vice Principal',
      image: 'https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'Every child has unique potential waiting to be discovered and nurtured.',
      education: 'M.Ed. in Curriculum Development',
      experience: '15 years in education'
    },
    {
      name: 'Ms. Sarah Williams',
      role: 'Head of Primary',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'The early years are crucial in building a strong foundation for lifelong learning.',
      education: 'M.A. in Early Childhood Education',
      experience: '12 years in primary education'
    },
    {
      name: 'Mr. James Anderson',
      role: 'Head of Middle School',
      image: 'https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=1600',
      quote: 'Middle school is where students begin to discover who they are and who they want to become.',
      education: 'M.Ed. in Secondary Education',
      experience: '18 years in education'
    }
  ];

  const departments = [
    {
      name: 'Mathematics',
      teachers: [
        {
          name: 'Mrs. Lisa Kumar',
          image: 'https://images.pexels.com/photos/5212670/pexels-photo-5212670.jpeg?auto=compress&cs=tinysrgb&w=1600',
          specialization: 'Advanced Mathematics'
        },
        {
          name: 'Mr. Michael Zhang',
          image: 'https://images.pexels.com/photos/5905948/pexels-photo-5905948.jpeg?auto=compress&cs=tinysrgb&w=1600',
          specialization: 'Middle School Math'
        }
      ]
    },
    {
      name: 'Science',
      teachers: [
        {
          name: 'Dr. Robert Wilson',
          image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1600',
          specialization: 'Physics & Chemistry'
        },
        {
          name: 'Ms. Emma Thompson',
          image: 'https://images.pexels.com/photos/5212693/pexels-photo-5212693.jpeg?auto=compress&cs=tinysrgb&w=1600',
          specialization: 'Biology'
        }
      ]
    },
    {
      name: 'Languages',
      teachers: [
        {
          name: 'Mrs. Maria Garcia',
          image: 'https://images.pexels.com/photos/5212681/pexels-photo-5212681.jpeg?auto=compress&cs=tinysrgb&w=1600',
          specialization: 'English Literature'
        },
        {
          name: 'Mr. Pierre Dubois',
          image: 'https://images.pexels.com/photos/5905721/pexels-photo-5905721.jpeg?auto=compress&cs=tinysrgb&w=1600',
          specialization: 'French'
        }
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Staff" 
        subtitle="Meet our dedicated team of educators and administrators"
        backgroundImage="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team is committed to providing the best possible 
              education and support for every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 italic mb-4">"{member.quote}"</p>
                  <div className="text-sm text-gray-500">
                    <p>{member.education}</p>
                    <p>{member.experience}</p>
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
            <h2 className="section-title">Our Departments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our teachers are experts in their fields, bringing passion and expertise 
              to every classroom.
            </p>
          </div>

          <div className="space-y-12">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.2 }
                  }
                }}
              >
                <h3 className="text-2xl font-semibold mb-6">{dept.name} Department</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dept.teachers.map((teacher, tIndex) => (
                    <div key={tIndex} className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{teacher.name}</h4>
                        <p className="text-gray-600">{teacher.specialization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffPage;