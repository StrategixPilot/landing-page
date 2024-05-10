import React from 'react';
import '../styles/Testimonials.css'; // Path to your Testimonials CSS for styling

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-container">
        <blockquote className="testimonial">
          <p>"Using AnalytixPilot has revolutionized how we approach our marketing strategy. The insights are not just data-driven but truly actionable!"</p>
          <cite>- Jane Doe, Marketing Director</cite>
        </blockquote>
        <blockquote className="testimonial">
          <p>"The AI recommendations have helped us improve our conversion rate by over 30% in just a few months."</p>
          <cite>- John Smith, CEO</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
