import React, { useEffect, useRef } from 'react'
import './ServicesSection.css'

export default function ServicesSection() {
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('in-view');
                }
            },
            { threshold: 0.1 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="container">
                <h2>SERVICES</h2>
                <p className='first-title'>
                    At TDS, we deliver tailored solutions that drive results. Explore our expertise and discover how we can help your business thrive.
                </p>
                <div className="service-cards">
                    <div className="card">
                        <img src="/images/services/full_stack.png" alt="Full-Stack Development" />
                        <h3>Full-Stack Development</h3>
                        <p>
                            Turn your ideas into reality with our expertise in Flutter, PHP Laravel, HTML, CSS, and JavaScript. We build dynamic web and mobile apps with user-friendly UI/UX designs for a seamless experience across devices.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/images/services/security.png" alt="DevSecOps" />
                        <h3>CyberSecurity</h3>
                        <p>
                            TDS secures businesses with tailored solutions, offering continuous monitoring, threat detection, and risk management. Our DevSecOps approach integrates security into every development stage.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/images/services/cloud.png" alt="Cloud Solutions" />
                        <h3>Cloud Solutions</h3>
                        <p>
                            Seamlessly transition your infrastructure to the cloud with TDS. Our cloud migration services ensure a smooth and secure shift to platforms like AWS and Azure with optimized performance and scalability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}