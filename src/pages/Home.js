import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Welcome to <span className="highlight">TaskMaster</span>
      </h1>
      <p className="hero-subtitle">
        Organize your tasks, boost your productivity.
      </p>
      <div className="hero-buttons">
        <Link to="/tasks">
          <button className="btn btn-primary">Go to Tasks</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-outline">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
