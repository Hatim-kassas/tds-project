import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaAddressCard, 
  FaClock, 
  FaShieldVirus,
  FaGlobeAmericas,
  FaEnvelope,
  FaDatabase
} from 'react-icons/fa';
import { SiCloudflare, SiIconfinder } from 'react-icons/si';

const Domain = () => {
  const pageData = {
    title: "Domain Services",
    description: "Comprehensive domain management solutions including registration, transfers, and DNS configuration.",
    callToAction: "Manage Domains",
    features: [
      {
        icon: <FaAddressCard />,
        title: "Domain Registration",
        description: "Secure your perfect domain name across 500+ TLDs"
      },
      {
        icon: <FaClock />,
        title: "Auto-Renewal",
        description: "Never lose your domain with automated renewals"
      },
      {
        icon: <FaShieldVirus />,
        title: "WHOIS Privacy",
        description: "Protect personal information from public databases"
      },
      {
        icon: <FaGlobeAmericas />,
        title: "DNS Management",
        description: "Advanced DNS controls with propagation monitoring"
      },
      {
        icon: <FaEnvelope />,
        title: "Email Forwarding",
        description: "Professional email aliases and forwarding rules"
      },
      {
        icon: <FaDatabase />,
        title: "Bulk Management",
        description: "Manage hundreds of domains through single dashboard"
      }
    ],
    techStack: [
      { icon: <SiCloudflare />, name: "Cloudflare" },
      { icon: <FaGlobeAmericas />, name: "Route53" },
      { icon: <SiIconfinder />, name: "ICANN" },
      { icon: <FaShieldVirus />, name: "DNSSEC" },
      { icon: <FaDatabase />, name: "BIND" },
      { icon: <FaClock />, name: "DNS Watch" }
    ],
    processSteps: [
      {
        title: "Domain Search",
        description: "Find available domains with our AI-powered search"
      },
      {
        title: "TLD Selection",
        description: "Choose optimal domain extension for your brand"
      },
      {
        title: "Registration/Transfer",
        description: "Instant registration or seamless transfers"
      },
      {
        title: "DNS Configuration",
        description: "Set up nameservers, records, and security"
      },
      {
        title: "Privacy Setup",
        description: "Enable WHOIS protection and SSL"
      },
      {
        title: "Monitoring",
        description: "24/7 domain health monitoring"
      }
    ],
    benefits: [
      "Domain locking",
      "Expiration alerts",
      "DNS templates",
      "URL forwarding",
      "Domain parking",
      "Brand protection",
      "Transfer authorization",
      "DNS failover",
      "GeoDNS routing",
      "TLD-specific support"
    ],
    testimonials: [
      {
        text: "Managing 200+ domains became effortless with Triad's bulk tools. Their domain expertise is unmatched.",
        name: "Sarah Johnson",
        position: "Brand Manager, Fortune 500 Co."
      },
      {
        text: "Transferred 15 domains in 24 hours with zero downtime. Flawless execution!",
        name: "Michael Chen",
        position: "CTO, Startup Accelerator"
      }
    ],
    faqItems: [
      {
        question: "Can I transfer existing domains?",
        answer: "Yes, we handle transfers from any registrar with EPP code management"
      },
      {
        question: "Do you offer premium domains?",
        answer: "We provide access to premium domain marketplace with negotiation services"
      },
      {
        question: "How long do transfers take?",
        answer: "Typically 5-7 days with proper authorization"
      }
    ],
    ctaSection: {
      title: "Secure Your Digital Identity",
      description: "Get expert domain management with enterprise-grade security and monitoring"
    }
  };

  return <PageTemplate {...pageData} />;
};

export default Domain;