import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaShieldAlt, FaLock, FaSearchengin, FaUserShield } from 'react-icons/fa';

const SecureCoding = () => {
  const pageData = {
    title: "Secure Coding",
    description: "Protect your business and customer data with our industry-leading secure coding practices and comprehensive security solutions.",
    callToAction: "Secure Your Application",
    features: [
      {
        icon: <FaShieldAlt />,
        title: "Security Audits",
        description: "Comprehensive assessment of your application's security posture to identify vulnerabilities and areas for improvement."
      },
      {
        icon: <FaLock />,
        title: "Secure Development",
        description: "Implementation of OWASP best practices and security-first development methodologies in all our coding processes."
      },
      {
        icon: <FaSearchengin />,
        title: "Penetration Testing",
        description: "Rigorous testing to simulate real-world attacks and verify the effectiveness of security measures implemented."
      },
      {
        icon: <FaUserShield />,
        title: "Security Training",
        description: "Knowledge transfer and training for your team to maintain secure coding practices long after our engagement."
      }
    ],
    benefits: [
      "Protection against common vulnerabilities like SQL injection and XSS",
      "Secure authentication and authorization implementations",
      "Data encryption both in transit and at rest",
      "Regular security updates and patch management",
      "Compliance with industry security standards and regulations",
      "Reduced risk of data breaches and associated costs"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default SecureCoding;