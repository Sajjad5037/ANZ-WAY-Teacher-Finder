import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Teachers = () => {
  // Example static data; replace with API data later
  const teacherList = [
    { id: 1, name: 'Alice', subject: 'Math', experience: '5 years', location: 'Lahore' },
    { id: 2, name: 'Bob', subject: 'Physics', experience: '3 years', location: 'Karachi' },
  ];

  // State for filters
  const [subjectFilter, setSubjectFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Available filter options
  const subjects = ['', 'Math', 'Physics'];
  const experiences = ['', '1-3 years', '3-5 years', '5+ years'];
  const locations = ['', 'Lahore', 'Karachi'];

  // Filter teachers based on selected criteria
  const filteredTeachers = teacherList.filter((teacher) => {
    const matchSubject = subjectFilter ? teacher.subject === subjectFilter : true;
    const matchExperience = experienceFilter
      ? experienceFilter === '5+ years'
        ? parseInt(teacher.experience) >= 5
        : experienceFilter === '1-3 years'
        ? parseInt(teacher.experience) >= 1 && parseInt(teacher.experience) <= 3
        : parseInt(teacher.experience) > 3 && parseInt(teacher.experience) <= 5
      : true;
    const matchLocation = locationFilter ? teacher.location === locationFilter : true;
    return matchSubject && matchExperience && matchLocation;
  });

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Available Teachers</h2>
      
      {/* Filter Form */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Filter Teachers</h3>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject || 'All Subjects'}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Experience
            </label>
            <select
              id="experience"
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {experiences.map((exp) => (
                <option key={exp} value={exp}>
                  {exp || 'All Experience Levels'}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc || 'All Locations'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Teacher List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p>Subject: {teacher.subject}</p>
              <p>Experience: {teacher.experience}</p>
              <p>Location: {teacher.location}</p>
              <Link to="/dashboard" className="mt-2 inline-block bg-primary text-white px-3 py-1 rounded">
                Book Now
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No teachers match the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Teachers;
