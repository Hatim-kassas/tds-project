import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaCode, FaLaptopCode, FaTools, FaMobileAlt } from 'react-icons/fa';

const WebDevelopment = () => {
  const pageData = {
    title: "Web Development",
    description: "Expert web development services to bring your vision to life with modern, responsive, and scalable solutions that drive business growth.",
    callToAction: "Start Your Web Project",
    features: [
      {
        icon: <FaLaptopCode />,
        title: "Responsive Design",
        description: "Mobile-first designs that look stunning on all devices, from smartphones to large desktop screens."
      },
      {
        icon: <FaCode />,
        title: "Full-Stack Solutions",
        description: "End-to-end web development from frontend interfaces to robust backend systems and database architecture."
      },
      {
        icon: <FaTools />,
        title: "Custom Web Applications",
        description: "Tailor-made web applications that solve your specific business challenges and integrate with your existing systems."
      },
      {
        icon: <FaMobileAlt />,
        title: "Progressive Web Apps",
        description: "Cutting-edge PWAs that combine the best of web and mobile applications for enhanced user experiences."
      }
    ],
    benefits: [
      "Optimized performance for lightning-fast loading speeds",
      "SEO-friendly architecture to improve your search engine rankings",
      "Secure coding practices to protect your data and users",
      "Scalable solutions that grow with your business needs",
      "Accessible design ensuring your website works for everyone",
      "Expert consultation throughout the development process"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default WebDevelopment;