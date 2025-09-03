import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import TeacherRegistration from './pages/TeacherRegistration';
import TeacherLogin from './pages/TeacherLogin';
import StudentRegistration from './pages/StudentRegistration';
import StudentLogin from './pages/StudentLogin';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <div className="bg-white text-primary">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="bg-lightPurple min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />                  {/* Browse teachers */}
          <Route path="/register-teacher" element={<TeacherRegistration />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/register-student" element={<StudentRegistration />} /> {/* New student signup */}
          <Route path="/student-login" element={<StudentLogin />} />         {/* New student login */}
          <Route path="/dashboard" element={<Dashboard />} />               {/* Dashboard for logged-in users */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className="bg-secondary text-white">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
