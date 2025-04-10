import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaCode, 
  FaLaptopCode, 
  FaTools, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaRocket,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaPhp,
  FaAws,
  FaPython,
  FaWordpress
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiNextdotjs } from 'react-icons/si';

const WebDevelopment = () => {
  const pageData = {
    title: "Web Development",
    description: "Expert web development services to bring your vision to life with modern, responsive, and scalable solutions that drive business growth.",
    callToAction: "Start Your Web Project",
    features: [
      {
        icon: <FaLaptopCode />,
        title: "Responsive Design",
        description: "Mobile-first designs that look stunning on all devices, from smartphones to large desktop screens, ensuring your users have a seamless experience across all platforms."
      },
      {
        icon: <FaCode />,
        title: "Full-Stack Solutions",
        description: "End-to-end web development from frontend interfaces to robust backend systems and database architecture, creating cohesive, efficient digital experiences."
      },
      {
        icon: <FaTools />,
        title: "Custom Web Applications",
        description: "Tailor-made web applications that solve your specific business challenges and integrate with your existing systems, optimized for your unique workflows."
      },
      {
        icon: <FaMobileAlt />,
        title: "Progressive Web Apps",
        description: "Cutting-edge PWAs that combine the best of web and mobile applications for enhanced user experiences, offline capabilities, and improved performance."
      },
      {
        icon: <FaShoppingCart />,
        title: "E-commerce Solutions",
        description: "Customized online stores with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales potential."
      },
      {
        icon: <FaRocket />,
        title: "Performance Optimization",
        description: "Speed optimization techniques to ensure your website loads quickly and efficiently, improving user experience and search engine rankings."
      }
    ],
    techStack: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaVuejs />, name: "Vue.js" },
      { icon: <FaAngular />, name: "Angular" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaWordpress />, name: "WordPress" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <FaServer />, name: "Express" },
      { icon: <FaAws />, name: "AWS" }
    ],
    processSteps: [
      {
        title: "Discovery & Planning",
        description: "We begin by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap."
      },
      {
        title: "Design & Prototyping",
        description: "Our design team creates wireframes and interactive prototypes that visualize the user experience before development begins."
      },
      {
        title: "Development",
        description: "Our developers bring the designs to life using the latest technologies and best practices for optimal performance and scalability."
      },
      {
        title: "Testing & Quality Assurance",
        description: "Rigorous testing across devices and browsers ensures your web solution functions flawlessly and meets all requirements."
      },
      {
        title: "Deployment",
        description: "We carefully launch your website or application with minimal downtime and ensure all systems are functioning correctly."
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing support and regular updates keep your web solution secure, up-to-date, and performing at its best."
      }
    ],
    benefits: [
      "Optimized performance for lightning-fast loading speeds",
      "SEO-friendly architecture to improve your search engine rankings",
      "Secure coding practices to protect your data and users",
      "Scalable solutions that grow with your business needs",
      "Accessible design ensuring your website works for everyone",
      "Cross-browser compatibility for a consistent experience",
      "Clean, maintainable code for easier future updates",
      "Integration capabilities with third-party services and APIs",
      "Comprehensive documentation for your technical team",
      "Expert consultation throughout the development process"
    ],
    testimonials: [
      {
        text: "The web application Triad Devs built for us has transformed our business operations. Their attention to detail and commitment to quality is unmatched.",
        name: "Michael Roberts",
        position: "CTO, InnovateTech Solutions"
      },
      {
        text: "Working with the Triad Devs team was a fantastic experience. They delivered our e-commerce platform ahead of schedule and the results exceeded our expectations.",
        name: "Sarah Johnson",
        position: "Marketing Director, Retail Innovations"
      },
      {
        text: "Their responsive design approach ensured our website looks amazing on all devices. Our mobile conversion rates have increased by 45% since launch.",
        name: "David Chen",
        position: "CEO, Global Reach Inc."
      }
    ],
    faqItems: [
      {
        question: "How long does a typical web development project take?",
        answer: "Project timelines vary based on complexity and scope, but most custom websites take 6-12 weeks from concept to launch. Web applications and larger e-commerce solutions may take 3-6 months. We'll provide you with a detailed timeline during our initial consultation."
      },
      {
        question: "Do you offer web hosting services?",
        answer: "Yes, we offer secure and reliable hosting solutions tailored to your project's needs. Our hosting packages include regular backups, security monitoring, and technical support to ensure your website remains online and performs optimally."
      },
      {
        question: "Can you help with an existing website rather than building from scratch?",
        answer: "Absolutely! We offer website redesign, optimization, and migration services. Our team can work with your existing codebase or help you transition to a more modern technology stack while preserving your content and SEO rankings."
      },
      {
        question: "How do you ensure my website will be secure?",
        answer: "Security is built into every stage of our development process. We implement SSL certificates, secure authentication methods, regular security updates, and follow OWASP best practices. For e-commerce sites, we ensure PCI compliance for handling payment information."
      },
      {
        question: "What maintenance and support do you provide after launch?",
        answer: "We offer various maintenance packages that include regular updates, security patches, performance monitoring, content updates, and technical support. Our team can respond quickly to any issues and provide ongoing improvements to keep your site running smoothly."
      }
    ],
    ctaSection: {
      title: "Ready to Transform Your Digital Presence?",
      description: "Let's discuss how our web development expertise can help you achieve your business goals with a stunning, high-performance website or application."
    }
  };

  return <PageTemplate {...pageData} />;
};

export default WebDevelopment;