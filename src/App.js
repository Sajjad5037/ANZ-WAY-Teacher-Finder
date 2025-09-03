import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
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
  // Set the document title on mount
  useEffect(() => {
    document.title = 'ANZWAY Teacher Finder';
  }, []);

  return (
    <Router>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="bg-lightPurple min-h-screen flex flex-col">
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
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white mt-auto">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
