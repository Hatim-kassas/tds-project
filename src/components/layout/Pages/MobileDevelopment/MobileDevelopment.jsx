import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaMobileAlt, 
  FaApple, 
  FaAndroid, 
  FaRocket, 
  FaSync,
  FaShieldAlt,
  FaTools,
  FaCode,
  FaReact,
  FaSwift,
  FaJava
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiFlutter, 
  SiFirebase, 
  SiTypescript,
  SiReact 
} from 'react-icons/si';

const MobileDevelopment = () => {
  const pageData = {
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences and drive engagement across iOS and Android devices.",
    callToAction: "Start Your Mobile App",
    features: [
      {
        icon: <FaApple />,
        title: "iOS Development",
        description: "Native iPhone and iPad applications built with Swift and SwiftUI, optimized for Apple's ecosystem and App Store guidelines."
      },
      {
        icon: <FaAndroid />,
        title: "Android Development",
        description: "High-performance Android apps built with Kotlin or Java, taking advantage of the latest Material Design principles and Google Play features."
      },
      {
        icon: <SiReact />,
        title: "Cross-Platform Development",
        description: "Efficient solutions using React Native or Flutter to deliver consistent experiences across iOS and Android with a single codebase."
      },
      {
        icon: <FaSync />,
        title: "App Modernization",
        description: "Upgrading legacy mobile applications with modern technologies, improved user interfaces, and enhanced functionality."
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Mobile Solutions",
        description: "Implementing robust security measures to protect user data, ensure compliance with regulations, and safeguard against threats."
      },
      {
        icon: <FaRocket />,
        title: "App Performance Optimization",
        description: "Fine-tuning your mobile application for speed, battery efficiency, and smooth operation even in challenging network conditions."
      }
    ],
    techStack: [
      { icon: <FaSwift />, name: "Swift" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaReact />, name: "React Native" },
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <FaCode />, name: "Objective-C" },
      { icon: <FaTools />, name: "Xcode" },
      { icon: <FaAndroid />, name: "Android Studio" }
    ],
    processSteps: [
      {
        title: "Strategy & Planning",
        description: "We define your app's core functionality, user stories, and technical architecture to create a solid foundation for development."
      },
      {
        title: "UI/UX Design",
        description: "Our designers create intuitive and engaging interfaces that follow platform-specific guidelines while maintaining your brand identity."
      },
      {
        title: "Development & Iteration",
        description: "Using agile methodologies, we build your application in sprints with regular feedback and iterations to ensure alignment with expectations."
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing across devices, screen sizes, and operating system versions to ensure compatibility and performance."
      },
      {
        title: "App Store Submission",
        description: "We handle the submission process to both the App Store and Google Play, ensuring compliance with all platform guidelines."
      },
      {
        title: "Monitoring & Updates",
        description: "Post-launch support including performance monitoring, bug fixes, feature enhancements, and platform updates."
      }
    ],
    benefits: [
      "Intuitive user interfaces that delight your customers",
      "Optimized performance across all supported devices",
      "Offline capabilities for uninterrupted user experiences",
      "Seamless integration with device features (camera, GPS, etc.)",
      "Push notifications to increase user engagement",
      "Secure data storage and protection",
      "Analytics integration for user behavior insights",
      "Scalable architecture to support growing user bases",
      "Accessibility features for users with disabilities",
      "Regular updates to maintain compatibility with new OS versions"
    ],
    testimonials: [
      {
        text: "Triad Devs transformed our business idea into a stunning mobile app that our customers love. The attention to detail in both design and functionality has set us apart from competitors.",
        name: "Jennifer Lewis",
        position: "Founder, HealthTrack"
      },
      {
        text: "The cross-platform solution they developed saved us significant time and resources while still delivering a native-like experience on both iOS and Android.",
        name: "Alex Morgan",
        position: "Product Manager, TechInnovate"
      },
      {
        text: "Their mobile development team's expertise in security protocols ensured our financial app passed all compliance requirements with flying colors.",
        name: "Robert Chen",
        position: "CTO, SecureFinance"
      }
    ],
    faqItems: [
      {
        question: "What's the difference between native and cross-platform development?",
        answer: "Native development uses platform-specific languages (Swift/Objective-C for iOS, Kotlin/Java for Android) and provides the best performance and access to all device features. Cross-platform development uses frameworks like React Native or Flutter to build apps that work on multiple platforms from a single codebase, offering cost efficiency and faster development times."
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Development timelines vary based on complexity, but typically range from 3-4 months for simpler apps to 6-12 months for complex applications with extensive features. We provide detailed timelines during our discovery process."
      },
      {
        question: "Can you help with app store optimization?",
        answer: "Yes, we offer app store optimization services to improve your app's visibility and conversion rates in both the App Store and Google Play. This includes keyword research, competitive analysis, screenshot optimization, and guidance on descriptions and metadata."
      },
      {
        question: "Do you provide ongoing maintenance after the app launch?",
        answer: "We offer flexible maintenance packages that include bug fixes, security updates, OS compatibility updates, and performance monitoring. Our team can also implement new features and improvements based on user feedback and changing business needs."
      },
      {
        question: "How do you ensure the security of mobile applications?",
        answer: "We implement industry best practices including secure authentication, encrypted data storage, secure API communication, code obfuscation, and regular security testing. For apps handling sensitive data, we also perform penetration testing and security audits."
      }
    ],
    ctaSection: {
      title: "Ready to Build Your Mobile Application?",
      description: "Let's create an engaging mobile experience that delights your users and drives your business forward. Schedule a consultation to discuss your project requirements."
    }
  };

  return <PageTemplate {...pageData} />;
};

export default MobileDevelopment;