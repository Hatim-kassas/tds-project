import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaLock, FaShieldAlt, FaSearchDollar, FaGlobe } from 'react-icons/fa';

const SSLCertificates = () => {
  const pageData = {
    title: "SSL Certificates",
    description: "Secure your website and build visitor trust with our comprehensive SSL certificate solutions and implementation services.",
    callToAction: "Secure Your Site Today",
    features: [
      {
        icon: <FaLock />,
        title: "SSL Certificate Installation",
        description: "Expert installation and configuration of SSL certificates across your websites and applications."
      },
      {
        icon: <FaShieldAlt />,
        title: "Certificate Management",
        description: "Ongoing monitoring, renewal, and updates to ensure your certificates never expire and remain secure."
      },
      {
        icon: <FaSearchDollar />,
        title: "Certificate Selection",
        description: "Guidance on choosing the right certificate type for your needs, from basic domain validation to extended validation certificates."
      },
      {
        icon: <FaGlobe />,
        title: "HTTPS Implementation",
        description: "Complete configuration of your web servers to enforce HTTPS, including proper redirects and security headers."
      }
    ],
    benefits: [
      "Enhanced website security through encrypted connections",
      "Improved customer trust with visible security indicators",
      "Better search engine rankings with Google's preference for HTTPS",
      "Protection against man-in-the-middle attacks",
      "Compliance with industry security standards and regulations",
      "Support for modern web features that require secure connections"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default SSLCertificates;