import axios from 'axios';

// API base from .env (for production + dev)
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const registerUser = async (userData) => {
  const res = await axios.post(`${API}/register`, userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post(`${API}/login`, userData);
  return res.data;
};
