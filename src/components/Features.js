import React from 'react';
import '../styles/Features.css';
import speedIcon from '../assets/speed-icon.png';
import analyticsIcon from '../assets/analytics-icon.png';
import technologyIcon from '../assets/technology-icon.png';
import userExperienceIcon from '../assets/user-experience-icon.png';

function Features() {
  return (
    <div className="features-section">
      <h2 className="section-title">Key Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src={speedIcon} alt="Speed" />
          <h3>Speed</h3>
          <p>Enhance your application's performance with lightning-fast responses.</p>
        </div>
        <div className="feature-item">
          <img src={analyticsIcon} alt="Analytics" />
          <h3>Analytics</h3>
          <p>Get deep insights with advanced analytics to drive your strategy.</p>
        </div>
        <div className="feature-item">
          <img src={technologyIcon} alt="Technology" />
          <h3>Technology</h3>
          <p>Use cutting-edge technology to stay ahead in your industry.</p>
        </div>
        <div className="feature-item">
          <img src={userExperienceIcon} alt="User Experience" />
          <h3>User Experience</h3>
          <p>Deliver superior user experiences to delight your customers.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
