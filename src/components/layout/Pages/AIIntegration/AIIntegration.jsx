import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaRobot, 
  FaBrain, 
  FaChartLine, 
  FaSearch, 
  FaComment,
  FaUsers,
  FaMagic,
  FaDatabase,
  FaServer,
  FaCloudflare,
  FaGlobe
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpenai, 
  SiHuggingface,
  SiPython
} from 'react-icons/si';

const AIIntegration = () => {
  const pageData = {
    title: "AI Integration",
    description: "Harness the power of artificial intelligence to transform your business with custom AI solutions, machine learning models, and intelligent automation.",
    callToAction: "Start Your AI Journey",
    features: [
      {
        icon: <FaComment />,
        title: "Conversational AI",
        description: "Custom chatbots and virtual assistants that enhance customer service, streamline support, and provide personalized experiences around the clock."
      },
      {
        icon: <FaBrain />,
        title: "Machine Learning Models",
        description: "Tailored ML solutions that analyze your data to deliver actionable insights, predictions, and automation opportunities specific to your business needs."
      },
      {
        icon: <FaChartLine />,
        title: "Predictive Analytics",
        description: "AI-powered forecasting and trend analysis that help you anticipate market changes, customer behavior, and business opportunities."
      },
      {
        icon: <FaSearch />,
        title: "Intelligent Search",
        description: "Enhanced search capabilities using natural language processing and semantic understanding to improve information discovery and access."
      },
      {
        icon: <FaUsers />,
        title: "Customer Insights",
        description: "AI-driven analysis of customer data to identify patterns, preferences, and opportunities for personalized marketing and improved experiences."
      },
      {
        icon: <FaMagic />,
        title: "Process Automation",
        description: "Intelligent automation of routine tasks and workflows using AI to increase efficiency, reduce errors, and free up human resources."
      }
    ],
    techStack: [
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiPytorch />, name: "PyTorch" },
      { icon: <SiOpenai />, name: "OpenAI" },
      { icon: <SiHuggingface />, name: "Hugging Face" },
      { icon: <SiPython />, name: "Python" },
      { icon: <FaDatabase />, name: "Big Data" },
      { icon: <FaServer />, name: "MLOps" },
      { icon: <FaCloudflare />, name: "Cloud AI" },
      { icon: <FaGlobe />, name: "NLP" },
      { icon: <FaRobot />, name: "LLMs" }
    ],
    processSteps: [
      {
        title: "Discovery & Assessment",
        description: "Understanding your business challenges and identifying opportunities where AI can provide meaningful impact and ROI."
      },
      {
        title: "Data Evaluation",
        description: "Assessing your data quality, structure, and accessibility to determine the most effective AI approaches for your specific needs."
      },
      {
        title: "Solution Design",
        description: "Creating a tailored AI solution architecture that addresses your specific use cases and integrates with your existing systems."
      },
      {
        title: "Model Development",
        description: "Building and training custom AI models or implementing pre-trained models adapted to your specific requirements and data."
      },
      {
        title: "Integration & Deployment",
        description: "Seamlessly integrating AI capabilities into your applications, workflows, and business processes with minimal disruption."
      },
      {
        title: "Monitoring & Refinement",
        description: "Continuous monitoring and improvement of AI performance, accuracy, and results to ensure ongoing value and adaptation to changing conditions."
      }
    ],
    benefits: [
      "Automated decision-making based on data rather than intuition",
      "Enhanced customer experiences through personalization",
      "Improved operational efficiency and reduced costs",
      "Faster time-to-insight from complex and large datasets",
      "Competitive advantage through innovative AI-powered features",
      "24/7 customer engagement via conversational interfaces",
      "Early detection of issues and opportunities in your business",
      "Scalable solutions that improve as they process more data",
      "Reduced human error in repetitive or complex tasks",
      "Future-proofing your business with cutting-edge technology"
    ],
    testimonials: [
      {
        text: "The custom AI solution developed by Triad Devs has revolutionized how we understand customer behavior. We've seen a 40% increase in conversion rates through AI-powered personalization.",
        name: "Caroline Warner",
        position: "Digital Transformation Officer, RetailNow"
      },
      {
        text: "Their AI integration team delivered a predictive maintenance solution that has reduced our downtime by 35% and maintenance costs by 28%. The ROI has been remarkable.",
        name: "Marcus Thompson",
        position: "Operations Director, IndustrialTech"
      },
      {
        text: "The conversational AI they built for our customer support has handled 70% of routine inquiries, freeing our team to focus on complex cases. Our customer satisfaction scores have improved significantly.",
        name: "Priya Sharma",
        position: "Customer Experience Lead, GlobalServices"
      }
    ],
    faqItems: [
      {
        question: "Do we need massive amounts of data to implement AI solutions?",
        answer: "Not necessarily. While more data generally improves AI performance, we can implement effective solutions with modest data sets using transfer learning, pre-trained models, and data augmentation techniques. We'll evaluate your specific situation during the assessment phase and recommend appropriate approaches based on your available data."
      },
      {
        question: "How long does it typically take to implement an AI solution?",
        answer: "Implementation timelines vary based on complexity, but typical projects range from 2-3 months for straightforward integrations to 6-12 months for more sophisticated custom solutions. We deliver value incrementally, focusing on quick wins while building toward comprehensive solutions."
      },
      {
        question: "Will AI integration require significant changes to our existing systems?",
        answer: "We design our AI solutions to integrate smoothly with your existing architecture whenever possible. Many solutions can be implemented as API services that complement rather than replace your current systems. During our discovery phase, we'll assess the integration points and recommend the least disruptive approach."
      },
      {
        question: "How do you ensure the privacy and ethical use of data in AI systems?",
        answer: "We implement robust data governance practices, including data anonymization, minimization, and security controls. Our AI solutions are designed with privacy by design principles, and we help you establish ethical guidelines for AI usage. We also ensure compliance with relevant regulations like GDPR, CCPA, and industry-specific requirements."
      },
      {
        question: "What ongoing support do you provide after implementing an AI solution?",
        answer: "We offer comprehensive maintenance packages that include model monitoring, performance tuning, and periodic retraining to prevent model drift. Our team can also provide knowledge transfer and training to your staff, as well as ongoing development of new features and capabilities as your needs evolve."
      }
    ],
    ctaSection: {
      title: "Ready to Transform Your Business with AI?",
      description: "Schedule a consultation to explore how our AI integration services can help you unlock new opportunities, streamline operations, and deliver exceptional experiences."
    }
  };

  return <PageTemplate {...pageData} />;
};

export default AIIntegration;