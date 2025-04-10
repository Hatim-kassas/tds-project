import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaCloud, 
  FaServer, 
  FaLock, 
  FaRocket, 
  FaSyncAlt,
  FaChartLine,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaAws,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiGooglecloud, 
  SiDocker, 
  SiKubernetes,
  SiTerraform
} from 'react-icons/si';

const CloudSolutions = () => {
  const pageData = {
    title: "Cloud Solutions",
    description: "Scalable, secure, and cost-effective cloud infrastructure and services designed to optimize your operations and accelerate innovation.",
    callToAction: "Transform Your Infrastructure",
    features: [
      {
        icon: <FaCloud />,
        title: "Cloud Architecture",
        description: "Custom cloud architecture designs optimized for performance, scalability, and cost-efficiency across public, private, and hybrid environments."
      },
      {
        icon: <FaServer />,
        title: "Infrastructure as Code",
        description: "Automated infrastructure deployment and management using tools like Terraform and CloudFormation for consistent, repeatable environments."
      },
      {
        icon: <FaNetworkWired />,
        title: "Serverless Solutions",
        description: "Event-driven architectures that scale automatically, reduce operational overhead, and optimize costs by paying only for actual usage."
      },
      {
        icon: <SiDocker />,
        title: "Containerization",
        description: "Containerized applications and orchestration solutions that improve portability, resource utilization, and deployment consistency."
      },
      {
        icon: <FaShieldAlt />,
        title: "Cloud Security",
        description: "Comprehensive security measures to protect your cloud infrastructure, applications, and data from threats and ensure compliance."
      },
      {
        icon: <FaChartLine />,
        title: "Performance Optimization",
        description: "Monitoring, analysis, and fine-tuning of cloud resources to maximize performance and minimize costs through efficient utilization."
      }
    ],
    techStack: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "Google Cloud" },
      { icon: <FaMicrosoft />, name: "Azure" },
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <FaRocket />, name: "DevOps" },
      { icon: <FaDatabase />, name: "Cloud Databases" },
      { icon: <FaLock />, name: "IAM" },
      { icon: <FaSyncAlt />, name: "CI/CD" }
    ],
    processSteps: [
      {
        title: "Cloud Assessment",
        description: "Evaluating your current infrastructure and requirements to determine the optimal cloud strategy and migration path."
      },
      {
        title: "Architecture Design",
        description: "Creating a robust cloud architecture tailored to your specific needs, security requirements, and performance goals."
      },
      {
        title: "Implementation Planning",
        description: "Developing a detailed implementation roadmap that minimizes disruption while ensuring a smooth transition to the cloud."
      },
      {
        title: "Deployment & Migration",
        description: "Executing the cloud implementation or migration with thorough testing and validation at each stage."
      },
      {
        title: "Security Configuration",
        description: "Establishing comprehensive security controls, access management, and monitoring to protect your cloud environment."
      },
      {
        title: "Optimization & Management",
        description: "Continuous monitoring, optimization, and management of your cloud infrastructure to ensure optimal performance and cost-efficiency."
      }
    ],
    benefits: [
      "Improved scalability to handle changing workloads and growth",
      "Enhanced resilience and disaster recovery capabilities",
      "Reduced capital expenditure through pay-as-you-go models",
      "Accelerated deployment of new applications and services",
      "Improved global reach and accessibility for users",
      "Advanced security and compliance capabilities",
      "Automatic updates and maintenance of infrastructure",
      "Optimized resource utilization and cost management",
      "Increased developer productivity through managed services",
      "Better environmental sustainability through shared resources"
    ],
    testimonials: [
      {
        text: "Triad Devs' cloud architecture redesign has significantly improved our application performance while reducing our infrastructure costs by 40%. Their expertise in AWS services was instrumental to our success.",
        name: "Daniel Peterson",
        position: "Infrastructure Manager, E-commerce Solutions"
      },
      {
        text: "Their cloud security implementation gave us confidence to move our sensitive workloads to the cloud. The automated compliance checks and monitoring have simplified our regulatory reporting process.",
        name: "Lisa Rodriguez",
        position: "CISO, Financial Services Inc."
      },
      {
        text: "Working with their cloud solutions team helped us modernize our legacy systems through containerization. Our development velocity has increased dramatically since the migration.",
        name: "Michael Chang",
        position: "CTO, SaaS Platform"
      }
    ],
    faqItems: [
      {
        question: "How do you determine which cloud provider is best for our needs?",
        answer: "We evaluate several factors including your specific workload requirements, existing technology investments, compliance needs, geographic distribution, budget constraints, and required services. Each major cloud provider has strengths in different areas, and we help you select the best fit—or a multi-cloud approach if appropriate—based on your specific situation."
      },
      {
        question: "How do you manage cloud costs and prevent unexpected expenses?",
        answer: "We implement comprehensive cloud cost management strategies including resource tagging, automated scaling, usage monitoring, idle resource detection, and regular cost optimization reviews. We set up budget alerts and dashboards to provide visibility into spending and identify opportunities for savings through reserved instances, spot instances, or service optimizations."
      },
      {
        question: "Can we maintain our existing security policies in the cloud?",
        answer: "Yes, we help translate your security policies to cloud environments using a 'security as code' approach. We implement identity and access management, encryption, network security, and compliance controls that align with your existing policies while leveraging cloud-native security features to enhance your overall security posture."
      },
      {
        question: "How do you handle cloud migrations for complex legacy systems?",
        answer: "We use a phased approach for complex migrations, beginning with non-critical workloads and gradually transitioning more complex systems. Depending on the application, we may use strategies such as rehosting (lift and shift), replatforming, refactoring, or rebuilding. Each migration includes thorough testing, validation, and rollback plans to minimize risk."
      },
      {
        question: "What ongoing support do you provide after cloud implementation?",
        answer: "We offer flexible managed services including 24/7 monitoring, incident response, security management, performance optimization, cost optimization, and regular maintenance. Our team can also provide ongoing development and enhancement of your cloud infrastructure as your needs evolve and new cloud services become available."
      }
    ],
    ctaSection: {
      title: "Ready to Harness the Power of the Cloud?",
      description: "Let's discuss how our cloud solutions can help you achieve greater scalability, security, and innovation while optimizing your technology investments."
    }
  };

  return <PageTemplate {...pageData} />;
};

export default CloudSolutions;