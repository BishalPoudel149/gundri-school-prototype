import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const CalendarPage = () => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const events = [
    {
      date: '2024-03-15',
      title: 'Parent-Teacher Meeting',
      type: 'academic',
      description: 'Term 1 progress discussion'
    },
    {
      date: '2024-04-05',
      title: 'Sports Day',
      type: 'sports',
      description: 'Annual sports competition'
    },
    {
      date: '2024-05-20',
      title: 'Art Exhibition',
      type: 'cultural',
      description: 'Student artwork showcase'
    },
    {
      date: '2024-06-10',
      title: 'Final Exams Begin',
      type: 'academic',
      description: 'End of year examinations'
    },
    {
      date: '2024-07-15',
      title: 'Summer Break Begins',
      type: 'holiday',
      description: 'School closed for summer vacation'
    }
  ];

  const eventTypes = {
    academic: 'bg-blue-100 text-blue-800',
    sports: 'bg-green-100 text-green-800',
    cultural: 'bg-purple-100 text-purple-800',
    holiday: 'bg-red-100 text-red-800'
  };

  const currentMonthEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === activeMonth && eventDate.getFullYear() === activeYear;
  });

  return (
    <div>
      <PageHeader 
        title="Academic Calendar" 
        subtitle="Stay updated with important dates and events throughout the academic year"
        backgroundImage="https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">School Calendar {activeYear}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              View upcoming events, holidays, and important academic dates.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => setActiveMonth(index)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeMonth === index
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMonthEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${eventTypes[event.type as keyof typeof eventTypes]}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-sm capitalize">{event.type}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p>{event.description}</p>
              </motion.div>
            ))}

            {currentMonthEvents.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No events scheduled for this month.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Academic Terms</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Overview of the academic year structure and key dates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                term: 'Term 1',
                dates: 'September - December',
                highlights: [
                  'New Academic Year Begins',
                  'Mid-Term Assessments',
                  'Parent-Teacher Meetings',
                  'Winter Break'
                ]
              },
              {
                term: 'Term 2',
                dates: 'January - March',
                highlights: [
                  'Sports Day',
                  'Science Fair',
                  'Term End Examinations',
                  'Spring Break'
                ]
              },
              {
                term: 'Term 3',
                dates: 'April - June',
                highlights: [
                  'Cultural Week',
                  'Final Examinations',
                  'Annual Day Celebration',
                  'Summer Break'
                ]
              },
              {
                term: 'Summer Programs',
                dates: 'July - August',
                highlights: [
                  'Summer Camps',
                  'Skill Development Workshops',
                  'Leadership Programs',
                  'New Student Orientation'
                ]
              }
            ].map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{term.term}</h3>
                <p className="text-primary-600 mb-4">{term.dates}</p>
                <ul className="space-y-2">
                  {term.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;