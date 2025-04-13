import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

function Register({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({ email, password });
      console.log('✅ Register Response:', data); // Debug log
      if (data.token) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/tasks');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
        console.error(error); 
      alert('Something went wrong');
    }
  };


  return (
    <div className="form-container">
      <h2>Create your TaskMaster Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
