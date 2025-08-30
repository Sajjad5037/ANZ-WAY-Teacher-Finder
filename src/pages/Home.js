import React from 'react';

export default function Home() {
  const courses = [
    { id: 1, title: "Mathematics", description: "A-Level Mathematics course for beginners to advanced." },
    { id: 2, title: "Physics", description: "Comprehensive A-Level Physics course with practical examples." },
    { id: 3, title: "Chemistry", description: "Learn A-Level Chemistry with interactive lessons and exercises." },
    { id: 4, title: "Biology", description: "Complete A-Level Biology course covering all essential topics." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Homebridge Clone</h1>
          <p className="text-lg md:text-xl mb-6">
            Your platform for top-notch online A-Level education.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">
            Explore Courses
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <div key={course.id} className="bg-white rounded shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
