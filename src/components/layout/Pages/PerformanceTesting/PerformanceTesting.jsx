import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaTachometerAlt, FaUsers, FaServer, FaBug } from 'react-icons/fa';

const PerformanceTesting = () => {
  const pageData = {
    title: "Performance Testing",
    description: "Ensure your applications can handle real-world usage with our comprehensive performance testing and optimization services.",
    callToAction: "Test Your Application",
    features: [
      {
        icon: <FaTachometerAlt />,
        title: "Load Testing",
        description: "Simulation of expected user loads to verify your application's performance under normal operating conditions."
      },
      {
        icon: <FaUsers />,
        title: "Stress Testing",
        description: "Pushing your systems beyond normal capacity to identify breaking points and recovery capabilities."
      },
      {
        icon: <FaServer />,
        title: "Scalability Testing",
        description: "Evaluating how your application scales with increasing user loads and data volumes to plan for growth."
      },
      {
        icon: <FaBug />,
        title: "Performance Optimization",
        description: "Expert analysis of testing results and implementation of optimizations to improve speed and responsiveness."
      }
    ],
    benefits: [
      "Identification of bottlenecks before they impact real users",
      "Confidence in your application's ability to handle peak traffic",
      "Reduced risk of downtime and performance degradation",
      "Optimization of resource usage and hosting costs",
      "Improved user experience through faster response times",
      "Detailed reporting and actionable recommendations"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default PerformanceTesting;