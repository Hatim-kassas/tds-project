import React, { useState } from 'react'
import './FAQSection.css'

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            title: "What services does TriadDevs provide?",
            text: "TriadDevs specializes in Full-Stack Development, Secure Code, and Cloud Solutions. We offer cutting-edge development with secure backend, frontend, and mobile solutions, robust cybersecurity practices, and seamless cloud migration services."
        },
        {
            title: "How can TriadDevs help my business?",
            text: "We empower your business by delivering tailored development solutions with a strong emphasis on security. From intuitive UI/UX design to cloud migration and data-driven marketing strategies, we drive your digital success and help you thrive in the digital age."
        },
        {
            title: "What technologies does TriadDevs use for development?",
            text: "We work with technologies like Flutter, PHP Laravel, Java, HTML/CSS, JavaScript, and other modern frameworks to ensure your web and mobile applications are dynamic, responsive, and user-friendly."
        },
        {
            title: "Can TriadDevs integrate AI into my system?",
            text: "Yes! TriadDevs offers seamless integration of AI solutions, including popular tools like ChatGPT, Copilot, and Claude. Just select the AI service you want, and we'll handle the integration and ensure it works smoothly with your systems."
        },
        {
            title: "How do TriadDevs handle cloud migration?",
            text: "Our Cloud Migration Services ensure a smooth and secure transition to cloud platforms like AWS, Azure, Google Cloud, or Cloudflare. We handle everything from planning to execution, optimizing your cloud environment for performance and scalability."
        },
        {
            title: "How do I get a project estimation?",
            text: "Getting a project estimation with TriadDevs is simple! You can easily request one through our website in just a few clicks. Our team will assess your requirements and provide you with an accurate estimate."
        },
        {
            title: "What industries do you specialize in?",
            text: "We have experience across multiple industries including healthcare, finance, e-commerce, education, and SaaS platforms. Our solutions are tailored to meet industry-specific compliance and security requirements."
        },
        {
            title: "Do you provide ongoing support after deployment?",
            text: "Absolutely. We offer comprehensive maintenance and support packages to ensure your systems remain up-to-date, secure, and performing optimally after deployment."
        },
        {
            title: "How do you ensure the security of our data?",
            text: "We implement industry-standard security protocols including encryption, secure coding practices, regular audits, and compliance with data protection regulations like GDPR and HIPAA where applicable."
        },
        {
            title: "What makes TriadDevs different from other development firms?",
            text: "Our unique combination of full-stack expertise, security-first approach, and cloud specialization allows us to deliver comprehensive solutions that address all aspects of modern digital transformation."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <h4>Frequently Asked Questions</h4>
            <div className="faqs-container">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className="faq-title">
                            {faq.title}
                        </h3>
                        {activeIndex === index && (
                            <p className="faq-text">{faq.text}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
