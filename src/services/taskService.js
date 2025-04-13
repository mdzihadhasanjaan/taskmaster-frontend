// API base from .env (for production + dev)
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const API_BASE = `${API}/api/tasks`;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

export const getTasks = async () => {
  const res = await fetch(API_BASE, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const addTask = async (task) => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });
  return res.json();
};

export const deleteTask = async (taskId) => {
  const res = await fetch(`${API_BASE}/${taskId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const completeTask = async (taskId) => {
  const res = await fetch(`${API_BASE}/${taskId}/complete`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  return res.json();
};
