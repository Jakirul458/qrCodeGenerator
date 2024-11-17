// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to QR Code Generator</h1>
      <p>Generate custom QR codes for free.</p>
      <Link to="/generate">Get Started</Link>
    </div>
  );
};

export default Home;
