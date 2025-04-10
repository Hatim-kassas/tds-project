import React from 'react';
import { FaArrowRight, FaChartLine, FaUsers, FaComments } from 'react-icons/fa';
import './PageTemplate.css';

const PageTemplate = ({ 
  title, 
  description, 
  features, 
  benefits, 
  callToAction,
  processSteps,
  testimonials,
  faqItems,
  techStack,
  ctaSection
}) => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>{title}</h1>
          <p className="hero-description">{description}</p>
          <a href="https://triaddevs.fillout.com/schedule" target='_blank' rel="noopener noreferrer" className="cta-button">
            {callToAction} <FaArrowRight className="btn-icon" />
          </a>
        </div>
      </div>

      <div className="features-section" id="features">
        <h2>What We Offer</h2>
        <div className="section-subtitle">Comprehensive {title} Services</div>
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

      <div className="tech-stack-section" id="tech-stack">
        <h2>Technologies We Use</h2>
        <div className="section-subtitle">Industry-Leading Tools & Frameworks</div>
        <div className="tech-stack-grid">
          {techStack?.map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="process-section" id="process">
        <h2>Our Development Process</h2>
        <div className="section-subtitle">A Systematic Approach to Excellence</div>
        <div className="process-timeline">
          {processSteps?.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="benefits-section" id="benefits">
        <div className="benefits-content">
          <h2>Why Choose Our {title} Services</h2>
          <div className="section-subtitle">The Advantages That Set Us Apart</div>
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

      <div className="testimonials-section" id="testimonials">
        <h2>Client Success Stories</h2>
        <div className="section-subtitle">What Our Clients Say About Us</div>
        <div className="testimonials-grid">
          {testimonials?.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-position">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="template-faq-section" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="section-subtitle">Common Questions About {title}</div>
        <div className="faq-grid">
          {faqItems?.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>{ctaSection?.title || `Ready to Start Your ${title} Project?`}</h2>
          <p>{ctaSection?.description || `Get in touch with our team to discuss your needs and find the perfect solution for your business.`}</p>
          <div className="cta-buttons">
            <a href="https://triaddevs.fillout.com/schedule" target='_blank' rel="noopener noreferrer" className="cta-button">
              Schedule a Consultation <FaArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;