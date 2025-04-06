import React from 'react'
import './ChooseUsSection.css'

export default function ChooseUsSection() {
    return (
        <section className="Section-Why-Choose-US" id="ChooseUS">
            <div className="Dev-Why-Choose-US">
                <h1 className="title-why-choose-us">Why Choose us?</h1>
                <p className="paragh-at-tds">
                    We Don't Just Deliver Services; We Build Long-Lasting Partnerships That Drive Business Growth.
                </p>
                <div className="cards-us">
                    <div className="card-second-section">
                        <div className="icon-container">
                            <img src="/images/smaller/idea.png" alt="Proven Expertise Icon" className="icon" />
                            <h3>Proven Expertise</h3>
                        </div>
                        <p>With Years of experience across diverse industries, We bring deep technical knowledge and innovation to every project.</p>
                    </div>
                    <div className="card-second-section">
                        <div className="icon-container">
                            <img src="/images/smaller/secure.png" alt="Security-First Icon" className="icon" />
                            <h3>Security-First Approach</h3>
                        </div>
                        <p>Our Secure Code practices ensure that Security is a top priority, protecting your business from cyber threats.</p>
                    </div>
                    <div className="card-second-section">
                        <div className="icon-container">
                            <img src="/images/smaller/support.png" alt="End-to-End Support Icon" className="icon" />
                            <h3>End-to-End Support</h3>
                        </div>
                        <p>From Concept To Execution, We Support Your Digital Transformation Journey At Every Stage.</p>
                    </div>
                    <div className="card-second-section">
                        <div className="icon-container">
                            <img src="/images/smaller/improvement.png" alt="Continuous Improvement Icon" className="icon" />
                            <h3>Continuous Improvement</h3>
                        </div>
                        <p>We're Committed To Evolving And Optimizing Our Solutions To Ensure Long-Term Success And Growth.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
