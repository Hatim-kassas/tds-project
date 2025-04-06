import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaMobile, FaApple, FaAndroid, FaSync } from 'react-icons/fa';

const MobileDevelopment = () => {
  const pageData = {
    title: "Mobile Development",
    description: "Transform your ideas into powerful mobile applications that engage users and drive your business forward across all platforms.",
    callToAction: "Create Your Mobile App",
    features: [
      {
        icon: <FaApple />,
        title: "iOS Development",
        description: "Native iOS applications designed specifically for iPhone and iPad with smooth performance and intuitive interfaces."
      },
      {
        icon: <FaAndroid />,
        title: "Android Development",
        description: "Custom Android applications built to reach the largest mobile user base with platform-specific features and capabilities."
      },
      {
        icon: <FaSync />,
        title: "Cross-Platform Solutions",
        description: "React Native and Flutter development to create a single codebase that works seamlessly across multiple platforms."
      },
      {
        icon: <FaMobile />,
        title: "App Maintenance & Updates",
        description: "Ongoing support, performance optimization, and feature updates to keep your mobile application competitive."
      }
    ],
    benefits: [
      "User-centered design focused on engagement and retention",
      "Performance optimization for smooth operation even on older devices",
      "Integration with device features like camera, GPS, and biometrics",
      "Comprehensive testing across multiple devices and OS versions",
      "App store optimization to improve visibility and downloads",
      "Scalable architecture to support growing user bases"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default MobileDevelopment;