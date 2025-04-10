import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaCloudUploadAlt, 
  FaServer, 
  FaDatabase, 
  FaShieldAlt,
  FaSyncAlt,
  FaChartLine,
  FaAws,
  FaMicrosoft,
  FaDocker,
  FaUbuntu,
  FaNetworkWired,
  FaRedhat
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus } from 'react-icons/si';

const CloudMigration = () => {
  const pageData = {
    title: "Cloud Migration",
    description: "Seamless cloud migration services to transform your infrastructure with zero downtime and maximum security.",
    callToAction: "Start Cloud Migration",
    features: [
      {
        icon: <FaCloudUploadAlt />,
        title: "Full Infrastructure Migration",
        description: "Complete transfer of applications, data, and workloads to cloud environments with minimal disruption"
      },
      {
        icon: <FaSyncAlt />,
        title: "Hybrid Cloud Solutions",
        description: "Smooth integration between on-premises systems and cloud environments for hybrid operations"
      },
      {
        icon: <FaShieldAlt />,
        title: "Security First Approach",
        description: "End-to-end encryption and compliance management during migration processes"
      },
      {
        icon: <FaDatabase />,
        title: "Database Migration",
        description: "Specialized migration of SQL/NoSQL databases with integrity checks and rollback plans"
      },
      {
        icon: <FaServer />,
        title: "Server Migration",
        description: "Physical/virtual server migration with configuration preservation and performance optimization"
      },
      {
        icon: <FaChartLine />,
        title: "Post-Migration Optimization",
        description: "Continuous performance monitoring and cost optimization after migration completion"
      }
    ],
    techStack: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaMicrosoft />, name: "Azure" },
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiAnsible />, name: "Ansible" },
      { icon: <FaUbuntu />, name: "Ubuntu" },
      { icon: <FaRedhat />, name: "Red Hat" },
      { icon: <FaNetworkWired />, name: "OpenStack" },
      { icon: <SiPrometheus />, name: "Prometheus" }
    ],
    processSteps: [
      {
        title: "Cloud Readiness Assessment",
        description: "Comprehensive analysis of current infrastructure and cloud suitability"
      },
      {
        title: "Migration Strategy Planning",
        description: "Development of phased migration roadmap with risk mitigation"
      },
      {
        title: "Environment Configuration",
        description: "Setup of target cloud environment with security and networking"
      },
      {
        title: "Data Migration Execution",
        description: "Secure transfer of data assets with checksum verification"
      },
      {
        title: "Application Migration",
        description: "Lift-and-shift or refactoring of applications as needed"
      },
      {
        title: "Validation & Cutover",
        description: "Full system testing and final production cutover"
      }
    ],
    benefits: [
      "50-70% reduction in infrastructure costs",
      "99.99% uptime guarantee during migration",
      "Multi-cloud strategy support",
      "Disaster recovery integration",
      "Real-time migration monitoring",
      "Compliance certification support",
      "Post-migration support package",
      "Automated rollback capabilities",
      "Performance benchmarking",
      "Cost optimization consulting"
    ],
    testimonials: [
      {
        text: "Triad Devs migrated our entire ERP system to AWS with zero downtime. Their expertise saved us months of internal work.",
        name: "Emily Rodriguez",
        position: "IT Director, FinTech Corp"
      },
      {
        text: "The cloud migration was completely transparent to our users. We didn't receive a single support ticket during cutover!",
        name: "Michael Chen",
        position: "CTO, HealthBridge Systems"
      }
    ],
    faqItems: [
      {
        question: "How long does cloud migration typically take?",
        answer: "Most medium-sized migrations take 4-8 weeks. Large enterprise migrations may take 3-6 months depending on complexity"
      },
      {
        question: "Do you support multi-cloud environments?",
        answer: "Yes, we specialize in AWS, Azure, GCP, and hybrid cloud configurations"
      },
      {
        question: "How do you handle data security during migration?",
        answer: "We use military-grade encryption, temporary air-gapped storage, and conduct penetration testing pre-launch"
      }
    ],
    ctaSection: {
      title: "Ready for Cloud Transformation?",
      description: "Let our certified cloud architects plan and execute your migration with military-grade precision"
    }
  };

  return <PageTemplate {...pageData} />;
};

export default CloudMigration;