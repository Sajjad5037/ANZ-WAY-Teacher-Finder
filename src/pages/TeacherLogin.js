import React, { useState } from 'react';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher Login:', { email, password });
    // Call API to login teacher
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Teacher Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2">Login</button>
      </form>
    </div>
  );
};

export default TeacherLogin;
