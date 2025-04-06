import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaGlobe, FaSearch, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';


const Domain = () => {
  const pageData = {
    title: "Domain Services",
    description: "Comprehensive domain registration, management, and protection services to secure your online brand identity.",
    callToAction: "Manage Your Domain",
    features: [
      {
        icon: <FaGlobe />,
        title: "Domain Registration",
        description: "Quick and easy domain registration with competitive pricing across all major TLDs (.com, .org, .net, and more)."
      },
      {
        icon: <FaSearch />,
        title: "Domain Availability Check",
        description: "Advanced search tools to find the perfect domain name for your business with instant availability checking."
      },
      {
        icon: <FaShieldAlt />,
        title: "Domain Protection",
        description: "Privacy protection services that shield your personal information from public WHOIS databases and spam."
      },
      {
        icon: <FaExchangeAlt />,
        title: "Domain Transfer",
        description: "Hassle-free domain transfers from other registrars with extended registration periods and no downtime."
      }
    ],
    benefits: [
      "Centralized domain management through an intuitive dashboard",
      "Automatic renewal options to prevent accidental expiration",
      "DNS management tools for configuring domain records",
      "Domain forwarding and masking capabilities",
      "24/7 support for domain-related issues",
      "Bulk domain management for organizations with multiple domains"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default Domain;