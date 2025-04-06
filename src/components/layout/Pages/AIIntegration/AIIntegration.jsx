import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { FaRobot, FaBrain, FaChartLine, FaComments } from 'react-icons/fa';

const AIIntegration = () => {
  const pageData = {
    title: "AI Integration",
    description: "Harness the power of artificial intelligence to transform your business processes, enhance customer experiences, and gain competitive advantages.",
    callToAction: "Explore AI Solutions",
    features: [
      {
        icon: <FaRobot />,
        title: "Machine Learning Integration",
        description: "Custom ML models and algorithms tailored to your specific business needs and data environment."
      },
      {
        icon: <FaBrain />,
        title: "Natural Language Processing",
        description: "Implement advanced NLP capabilities for content analysis, sentiment detection, and automated understanding of user inputs."
      },
      {
        icon: <FaChartLine />,
        title: "Predictive Analytics",
        description: "Turn your data into valuable insights with predictive models that forecast trends and support decision-making."
      },
      {
        icon: <FaComments />,
        title: "Conversational AI",
        description: "Intelligent chatbots and virtual assistants that provide personalized interactions and support for your customers."
      }
    ],
    benefits: [
      "Automation of repetitive tasks to free up human resources",
      "Enhanced decision-making through data-driven insights",
      "Personalized user experiences that adapt to individual needs",
      "Improved operational efficiency and cost reduction",
      "Competitive advantage through cutting-edge AI capabilities",
      "Scalable solutions that grow more intelligent over time"
    ]
  };

  return <PageTemplate {...pageData} />;
};

export default AIIntegration;