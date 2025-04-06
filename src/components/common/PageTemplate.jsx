import React from 'react';
import './PageTemplate.css';

const PageTemplate = ({ title, description, features, benefits, callToAction }) => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>{title}</h1>
          <p className="hero-description">{description}</p>
          <a href="https://triaddevs.fillout.com/schedule" target='_blank' className="cta-button">
            {callToAction}
          </a>
        </div>
      </div>

      <div className="features-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="benefits-section">
        <div className="benefits-content">
          <h2>Why Choose Our {title} Services</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span className="benefit-check">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;