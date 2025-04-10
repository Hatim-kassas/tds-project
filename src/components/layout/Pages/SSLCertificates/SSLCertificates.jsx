import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaLock, 
  FaShieldAlt, 
  FaGlobe, 
  FaSyncAlt,
  FaSearchDollar,
  FaCertificate,
  FaBalanceScale
} from 'react-icons/fa';
import { SiLetsencrypt, SiOpenssl, SiCommerzbank } from 'react-icons/si';

const SSLCertificates = () => {
  const pageData = {
    title: "SSL Certificates",
    description: "Complete SSL/TLS solutions to secure your website and build customer trust with enterprise-grade encryption.",
    callToAction: "Secure Your Site",
    features: [
      {
        icon: <FaLock />,
        title: "DV/OV/EV Certificates",
        description: "Domain Validation to Extended Validation certificates with visible trust indicators"
      },
      {
        icon: <FaGlobe />,
        title: "Wildcard SSL",
        description: "Secure unlimited subdomains with a single certificate"
      },
      {
        icon: <FaShieldAlt />,
        title: "PCI Compliance",
        description: "Full compliance solutions for e-commerce security standards"
      },
      {
        icon: <FaSyncAlt />,
        title: "Auto-Renewal",
        description: "Never experience certificate expiration with automated renewal system"
      },
      {
        icon: <FaSearchDollar />,
        title: "Vulnerability Scans",
        description: "Weekly security audits and vulnerability assessments"
      },
      {
        icon: <FaBalanceScale />,
        title: "Multi-Domain SSL",
        description: "Secure multiple domains with SAN (Subject Alternative Name) certificates"
      }
    ],
    techStack: [
      { icon: <SiLetsencrypt />, name: "Let's Encrypt" },
      { icon: <FaCertificate />, name: "DigiCert" },
      { icon: <SiOpenssl />, name: "OpenSSL" },
      { icon: <FaCertificate />, name: "GeoTrust" },
      { icon: <FaCertificate />, name: "Comodo" },
      { icon: <FaLock />, name: "Symantec" }
    ],
    processSteps: [
      {
        title: "Certificate Selection",
        description: "Help choose the perfect SSL type for your security needs"
      },
      {
        title: "CSR Generation",
        description: "Create Certificate Signing Requests with proper validation"
      },
      {
        title: "Domain Verification",
        description: "Complete domain ownership verification process"
      },
      {
        title: "Installation",
        description: "Professional installation and configuration"
      },
      {
        title: "Mixed Content Fix",
        description: "Ensure all site resources load via HTTPS"
      },
      {
        title: "Ongoing Monitoring",
        description: "24/7 certificate health monitoring"
      }
    ],
    benefits: [
      "256-bit encryption standard",
      "Browser trust indicators",
      "Daily malware scanning",
      "Seal-in-Search features",
      "HTTPS redirect setup",
      "HSTS implementation",
      "OCSP stapling",
      "CAA record configuration",
      "Revocation protection",
      "Multi-server deployment"
    ],
    testimonials: [
      {
        text: "Triad Devs implemented EV SSL across our global sites. The green address bar increased conversions by 18% immediately.",
        name: "Lisa Tanaka",
        position: "E-commerce Director, Global Retail Co."
      },
      {
        text: "Their auto-renewal system saved us from an embarrassing certificate expiration. Seamless service!",
        name: "Mark Wilson",
        position: "IT Manager, HealthFirst Clinic"
      }
    ],
    faqItems: [
      {
        question: "What's the difference between DV and EV SSL?",
        answer: "Domain Validation (DV) verifies ownership, while Extended Validation (EV) requires business authentication and displays your company name in the address bar"
      },
      {
        question: "Can you migrate existing SSL certificates?",
        answer: "Yes, we handle certificate transfers, private key migration, and cross-platform installations"
      },
      {
        question: "Do you offer warranties?",
        answer: "Our enterprise certificates include up to $1.75M warranty against breaches"
      }
    ],
    ctaSection: {
      title: "Protect Your Website Today",
      description: "Get enterprise-grade SSL encryption with expert installation and ongoing security monitoring"
    }
  };

  return <PageTemplate {...pageData} />;
};

export default SSLCertificates;