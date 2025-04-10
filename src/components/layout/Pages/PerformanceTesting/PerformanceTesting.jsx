import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaTachometerAlt, 
  FaBurn, 
  FaShieldAlt,
  FaChartBar,
  FaCodeBranch,
  FaRobot,
  FaTools,
  FaBolt,
  FaFire,
  FaBug
} from 'react-icons/fa';
import { SiNewrelic } from 'react-icons/si';

const PerformanceTesting = () => {
  const pageData = {
    title: "Performance Testing",
    description: "Ensure your applications withstand peak loads with comprehensive performance testing solutions.",
    callToAction: "Test Your System",
    features: [
      {
        icon: <FaTachometerAlt />,
        title: "Load Testing",
        description: "Simulate thousands of concurrent users to identify bottlenecks"
      },
      {
        icon: <FaBurn />,
        title: "Stress Testing",
        description: "Push systems beyond limits to find breaking points"
      },
      {
        icon: <FaShieldAlt />,
        title: "Security Testing",
        description: "Penetration testing and vulnerability assessments"
      },
      {
        icon: <FaChartBar />,
        title: "APM Integration",
        description: "New Relic/Datadog integration for real-time metrics"
      },
      {
        icon: <FaCodeBranch />,
        title: "CI/CD Integration",
        description: "Automated testing in DevOps pipelines"
      },
      {
        icon: <FaRobot />,
        title: "AI Analysis",
        description: "Machine learning-powered performance recommendations"
      }
    ],
    techStack: [
      { icon: <FaTools />, name: "JMeter" },
      { icon: <FaBolt />, name: "Gatling" },
      { icon: <FaFire />, name: "BlazeMeter" },
      { icon: <SiNewrelic />, name: "New Relic" },
      { icon: <FaBurn />, name: "LoadRunner" },
      { icon: <FaBug />, name: "Locust" }
    ],
    processSteps: [
      {
        title: "Requirement Analysis",
        description: "Define KPIs and success metrics"
      },
      {
        title: "Test Planning",
        description: "Create realistic user scenarios"
      },
      {
        title: "Environment Setup",
        description: "Replicate production environment"
      },
      {
        title: "Test Execution",
        description: "Run automated test suites"
      },
      {
        title: "Results Analysis",
        description: "Detailed bottleneck identification"
      },
      {
        title: "Optimization",
        description: "Implement performance fixes"
      }
    ],
    benefits: [
      "SLA validation",
      "Capacity planning",
      "Cloud scaling tests",
      "DB query optimization",
      "Third-party API testing",
      "Mobile network simulation",
      "Error rate analysis",
      "Concurrency testing",
      "Endurance testing",
      "Spike testing"
    ],
    testimonials: [
      {
        text: "Their stress testing revealed critical DB issues before launch. Saved us from a production disaster!",
        name: "David Kim",
        position: "Lead DevOps Engineer, FinTech Startup"
      },
      {
        text: "Triad's performance reports helped us reduce API latency by 400ms. Essential service!",
        name: "Maria Gonzalez",
        position: "CTO, SaaS Platform"
      }
    ],
    faqItems: [
      {
        question: "What's the difference between load and stress testing?",
        answer: "Load testing verifies performance under expected loads, while stress testing pushes beyond limits to find failure points"
      },
      {
        question: "Can you test mobile apps?",
        answer: "Yes, we simulate various mobile networks and device capabilities"
      },
      {
        question: "Do you provide remediation help?",
        answer: "Our reports include prioritized fixes and architecture recommendations"
      }
    ],
    ctaSection: {
      title: "Ensure System Reliability",
      description: "Identify performance bottlenecks before your users do with our expert testing services"
    }
  };

  return <PageTemplate {...pageData} />;
};

export default PerformanceTesting;