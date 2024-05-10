import React from 'react';
import '../styles/Header.css';
// import heroImage from '../assets/hero-image.png';

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">StrategixPilot</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="hero">
        <div className="hero-text">
          <h1>Turn Your Data Into Action With AI-Driven Insights</h1>
          <p>StrategixPilot empowers your startup to leverage Google Analytics data like never before.</p>
          <div className="button-container">
            <button className="cta-primary">Get Started For Free</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
