import React from 'react';
import { Link } from 'react-router-dom';

const Teachers = () => {
  // Example static data; replace with API data later
  const teacherList = [
    { id: 1, name: 'Alice', subject: 'Math', experience: '5 years' },
    { id: 2, name: 'Bob', subject: 'Physics', experience: '3 years' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Available Teachers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teacherList.map((teacher) => (
          <div key={teacher.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{teacher.name}</h3>
            <p>Subject: {teacher.subject}</p>
            <p>Experience: {teacher.experience}</p>
            <Link to="/dashboard" className="mt-2 inline-block bg-primary text-white px-3 py-1 rounded">
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
