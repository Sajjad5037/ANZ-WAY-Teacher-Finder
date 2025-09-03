import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Connect with Qualified Home Tutors Online</h1>

      <p className="text-lg">
        Welcome to <strong>Home Tutor Connect</strong>, a platform that brings experienced teachers and students together for seamless online tuition.
        Teachers can register their profiles, share their subjects and availability, and manage their sessions easily. 
        Students can browse through verified teacher profiles, book sessions online, and track their learning progress—all from the comfort of their home.
      </p>

      <p className="text-lg">
        By connecting with qualified tutors through our platform, students gain access to personalized guidance, flexible scheduling, and one-on-one attention that helps them excel academically. 
        Our goal is to make learning convenient, effective, and rewarding for every student.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <Link to="/teachers" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
          Browse Teachers
        </Link>
        <Link to="/register-student" className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition">
          Sign Up as Student
        </Link>
        <Link to="/register-teacher" className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition">
          Sign Up as Teacher
        </Link>
      </div>
    </div>
  );
};

export default Home;
