
import React, { useEffect, useRef } from 'react';
import './FullStackSection.css'

export default function FullStackSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
      const node = sectionRef.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add active class when element is visible
            node.classList.add('active');
          }
        });
      }, {
        threshold: 0.1
      });
      
      if (node) {
        observer.observe(node);
      }
      
      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    }, []);
  

  
    return (
      <section className="our-services" ref={sectionRef} >
        <h2>Full Stack, Cloud, Security</h2>
        <p className="description">
          TDS Delivers Seamless Development And Robust Security Solutions Tailored To Drive Your Business Forward.
        </p>
        <div className="icons">
          <img src="/images/vector/group_icons.png" alt="Service Icons" />
        </div>

        <a href="https://triaddevs.fillout.com/schedule"
            target="_blank"
            rel="noopener noreferrer">
          <span className="text">Get Started</span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="37" cy="37" r="35.5" stroke="white" strokeWidth="3"></circle>
            <path
              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </section>
    );
  };
