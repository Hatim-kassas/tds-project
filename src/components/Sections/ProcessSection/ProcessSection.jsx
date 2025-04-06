import React, { useEffect, useState, useRef } from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    let currentStep = 0;
    const totalSteps = stepsRef.current.length;

    const animateSteps = () => {
      if (currentStep < totalSteps) {
        setActiveStep(currentStep);
        currentStep++;
        setTimeout(animateSteps, 800);
      } else {
        // Animation complete - all steps visible
        setActiveStep(-1); // -1 means all steps should be active
      }
    };

    animateSteps();
  };

  return (
    <section className="our-process" id="process" ref={processRef}>
      <h2>Our Process</h2>
      <div className="process-steps">
        {[
          {
            number: 1,
            title: "Discovery & Strategy",
            description: "We start by analyzing your business needs and crafting a strategy that aligns with your goals."
          },
          {
            number: 2,
            title: "Design & Development",
            description: "Our experts design and build innovative solutions customized to your unique requirements."
          },
          {
            number: 3,
            title: "Security & Testing",
            description: "Every solution undergoes comprehensive security checks and testing to meet the highest standards of quality and safety."
          },
          {
            number: 4,
            title: "Deployment & Support",
            description: "We deploy your solution with precision, and our ongoing support ensures your systems run smoothly post-launch."
          }
        ].map((step, index) => (
          <React.Fragment key={index}>
            <div 
              className={`step ${activeStep === index || activeStep === -1 ? 'active' : ''}`}
              ref={el => stepsRef.current[index] = el}
            >
              <div className="circle">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < 3 && <div className="arrow">&#8594;</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;