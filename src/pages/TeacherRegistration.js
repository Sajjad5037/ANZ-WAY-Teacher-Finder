import React, { useState } from 'react';

const TeacherRegistration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', subject: '', experience: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher Data:', formData);
    // Call API to register teacher
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register as Teacher</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-2 border rounded" />
        <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="p-2 border rounded" />
        <input name="experience" placeholder="Experience (years)" value={formData.experience} onChange={handleChange} className="p-2 border rounded" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2">Register</button>
      </form>
    </div>
  );
};

export default TeacherRegistration;
