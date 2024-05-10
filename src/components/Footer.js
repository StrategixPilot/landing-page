import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>© 2024 StrategixPilot. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
