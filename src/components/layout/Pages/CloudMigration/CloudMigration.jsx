import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaExchangeAlt, FaRegClone, FaCloudUploadAlt, FaShieldAlt } from 'react-icons/fa';

const CloudMigration = () => {
  const pageData = {
    title: "Cloud Migration",
    description: "Seamlessly transition your existing infrastructure and applications to the cloud with our expert migration services.",
    callToAction: "Start Your Migration Journey",
    features: [
      {
        icon: <FaExchangeAlt />,
        title: "Migration Assessment",
        description: "Comprehensive analysis of your current infrastructure to create a tailored migration strategy with minimal disruption."
      },
      {
        icon: <FaRegClone />,
        title: "Lift & Shift Solutions",
        description: "Direct migration of your applications to cloud infrastructure with minimal modifications for quick deployment."
      },
      {
        icon: <FaCloudUploadAlt />,
        title: "Cloud-Native Transformation",
        description: "Refactoring applications to take full advantage of cloud capabilities like auto-scaling, managed services, and serverless functions."
      },
      {
        icon: <FaShieldAlt />,
        title: "Security-First Migration",
        description: "Ensuring data protection throughout the migration process with comprehensive security controls and best practices."
      }
    ],
    benefits: [
      "Reduced downtime during migration with careful planning and execution",
      "Cost optimization through right-sizing and cloud-native architecture",
      "Improved performance by leveraging cloud provider capabilities",
      "Enhanced disaster recovery and business continuity",
      "Elimination of technical debt and legacy infrastructure challenges",
      "Ongoing support and optimization post-migration"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default CloudMigration;