import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // optional, if you want custom styles

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My React App 🚀</h1>
      <p>This is the default home page of your Vite + React + TypeScript project.</p>

      <div className="links">
        <Link to="/about" className="nav-link">Go to About Page</Link>
      </div>
    </div>
  );
};

export default Home;
