import React from 'react';
import '../styles/Pricing.css'; // Path to your Pricing CSS for styling

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="section-title">Pricing Plans</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">Free</p>
          <ul>
            <li>AI-driven insights</li>
            <li>Basic dashboards</li>
            <li>Email support</li>
          </ul>
          <button className="cta-primary">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">$29/month</p>
          <ul>
            <li>All Basic features</li>
            <li>Custom dashboards</li>
            <li>Priority support</li>
          </ul>
          <button className="cta-primary">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Contact us</p>
          <ul>
            <li>All Premium features</li>
            <li>API access</li>
            <li>Dedicated account manager</li>
          </ul>
          <button className="cta-primary">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
