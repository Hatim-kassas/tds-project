import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaCloud, FaServer, FaNetworkWired, FaDatabase } from 'react-icons/fa';

const CloudSolutions = () => {
  const pageData = {
    title: "Cloud Solutions",
    description: "Optimize your infrastructure with our tailored cloud solutions that enhance scalability, reliability, and cost-effectiveness.",
    callToAction: "Transform Your Infrastructure",
    features: [
      {
        icon: <FaCloud />,
        title: "Cloud Architecture Design",
        description: "Custom cloud infrastructure designs that align with your business goals, security requirements, and operational needs."
      },
      {
        icon: <FaServer />,
        title: "Serverless Applications",
        description: "Modern, event-driven applications that scale automatically and only charge you for the resources you actually use."
      },
      {
        icon: <FaNetworkWired />,
        title: "DevOps Implementation",
        description: "Continuous integration and delivery pipelines that streamline your development process and enhance collaboration."
      },
      {
        icon: <FaDatabase />,
        title: "Database Management",
        description: "Cloud-based database solutions with high availability, automated backups, and optimized performance."
      }
    ],
    benefits: [
      "Reduced infrastructure costs through pay-as-you-go models",
      "Enhanced reliability with redundant systems and disaster recovery",
      "Improved security with industry-leading cloud provider protections",
      "Unlimited scalability to handle traffic spikes and growth",
      "Faster deployment and time-to-market for new features",
      "Expert support for AWS, Azure, and Google Cloud platforms"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default CloudSolutions;