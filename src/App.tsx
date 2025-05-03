import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import AlumniPage from './pages/AlumniPage';
import CalendarPage from './pages/CalendarPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App