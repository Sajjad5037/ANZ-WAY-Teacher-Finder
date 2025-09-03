import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Home Tutor</h1>
      <p className="mb-6">Browse qualified teachers and schedule online home tuition sessions easily.</p>
      <div className="flex gap-4">
        <Link to="/teachers" className="bg-primary text-white px-4 py-2 rounded">Browse Teachers</Link>
        <Link to="/register-student" className="bg-secondary text-white px-4 py-2 rounded">Sign Up as Student</Link>
        <Link to="/register-teacher" className="bg-secondary text-white px-4 py-2 rounded">Sign Up as Teacher</Link>
      </div>
    </div>
  );
};

export default Home;
