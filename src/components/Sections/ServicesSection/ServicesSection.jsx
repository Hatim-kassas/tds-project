import React from 'react'
import './ServicesSection.css'
export default function ServicesSection() {
    return (
        <section className="services" id="services">
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
                            Turn your ideas into reality with our expertise in Flutter, PHP Laravel, HTML, CSS, and JavaScript. We build dynamic web and mobile apps with user-friendly UI/UX designs for a seamless experience across devices. TDS delivers fast, tailored solutions for apps or platforms.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/images/services/security.png" alt="DevSecOps" />
                        <h3>CyberSecurity</h3>
                        <p>
                            TDS secures businesses with tailored solutions, offering continuous monitoring, threat detection, and risk management. Our DevSecOps approach integrates security into every development stage, keeping your systems safe and resilient.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/images/services/cloud.png" alt="Cloud Solutions" />
                        <h3>Cloud Solutions</h3>
                        <p>
                            Seamlessly Transition Your Infrastructure To The Cloud With TDS. Our Cloud Migration Services Ensure A Smooth And Secure Shift To Platforms Like AWS And Azure. We Handle Everything—From Planning And Executing The Migration To Optimizing Your Cloud Environment For Performance And Scalability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
