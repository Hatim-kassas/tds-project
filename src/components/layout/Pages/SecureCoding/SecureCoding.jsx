import React from 'react';
import PageTemplate from '../../../common/PageTemplate';
import { 
  FaShieldAlt, 
  FaLock, 
  FaSearch, 
  FaCodeBranch, 
  FaUserShield,
  FaUserLock,
  FaBug,
  FaClipboardCheck,
  FaServer,
  FaCloudflare,
  FaAws
} from 'react-icons/fa';
import { 
  SiOwasp, 
  SiVault, 
  SiSonarqube, 
  SiTerraform,
  SiSnyk
} from 'react-icons/si';

const SecureCoding = () => {
  const pageData = {
    title: "Secure Coding",
    description: "Protect your applications and data with our comprehensive secure coding practices and solutions designed to mitigate vulnerabilities and threats.",
    callToAction: "Enhance Your Security",
    features: [
      {
        icon: <FaSearch />,
        title: "Security Assessments",
        description: "Comprehensive evaluations of your applications to identify vulnerabilities, weaknesses, and security gaps before they can be exploited."
      },
      {
        icon: <FaCodeBranch />,
        title: "Secure SDLC Integration",
        description: "Embedding security practices into every stage of your software development lifecycle, from initial design to deployment and maintenance."
      },
      {
        icon: <FaBug />,
        title: "Vulnerability Remediation",
        description: "Expert resolution of identified security issues with practical recommendations and code fixes tailored to your technology stack."
      },
      {
        icon: <FaUserShield />,
        title: "Authentication & Authorization",
        description: "Implementation of robust identity management solutions including multi-factor authentication, OAuth, and fine-grained access controls."
      },
      {
        icon: <FaLock />,
        title: "Data Encryption",
        description: "Protecting sensitive data at rest and in transit through proper encryption protocols and cryptographic best practices."
      },
      {
        icon: <FaClipboardCheck />,
        title: "Compliance Implementation",
        description: "Meeting industry-specific security standards and regulations including GDPR, HIPAA, PCI DSS, and SOC 2 through code-level compliance."
      }
    ],
    techStack: [
      { icon: <SiOwasp />, name: "OWASP" },
      { icon: <SiSonarqube />, name: "SonarQube" },
      { icon: <SiSnyk />, name: "Snyk" },
      { icon: <FaCloudflare />, name: "Cloudflare" },
      { icon: <FaUserLock />, name: "Auth0" },
      { icon: <SiVault />, name: "HashiCorp Vault" },
      { icon: <FaAws />, name: "AWS Security" },
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <FaServer />, name: "WAF" },
      { icon: <FaShieldAlt />, name: "Penetration Testing" }
    ],
    processSteps: [
      {
        title: "Security Requirements",
        description: "Defining security needs and threat models specific to your application environment and business context."
      },
      {
        title: "Design Review",
        description: "Analyzing your application architecture to identify security flaws and recommend secure design patterns."
      },
      {
        title: "Static Code Analysis",
        description: "Automated scanning of source code to detect security vulnerabilities and coding errors before deployment."
      },
      {
        title: "Dynamic Testing",
        description: "Runtime security testing to identify vulnerabilities that emerge from the interaction of components."
      },
      {
        title: "Penetration Testing",
        description: "Simulated attacks by our security experts to identify exploitable vulnerabilities in your applications."
      },
      {
        title: "Continuous Monitoring",
        description: "Ongoing security monitoring and periodic assessment to maintain security posture as threats evolve."
      }
    ],
    benefits: [
      "Protection against common web vulnerabilities and OWASP Top 10 threats",
      "Reduced risk of data breaches and associated costs",
      "Increased customer trust and confidence in your digital services",
      "Compliance with industry standards and regulatory requirements",
      "Early detection of security issues when they're easiest to fix",
      "Lower long-term security maintenance costs",
      "Secure handling of sensitive user data and privacy protection",
      "Protection of your brand reputation and business continuity",
      "Defense against evolving cyber threats and attack vectors",
      "Security knowledge transfer to your development team"
    ],
    testimonials: [
      {
        text: "The secure coding practices implemented by Triad Devs have dramatically reduced our application vulnerabilities. Their thorough approach to security has been a game-changer for our organization.",
        name: "Thomas Richards",
        position: "CISO, Enterprise Solutions"
      },
      {
        text: "Their team identified critical security issues that our previous audits had missed. The remediation process was clear and efficient, with minimal disruption to our development schedule.",
        name: "Maria Gonzalez",
        position: "Security Director, FinTech Innovations"
      },
      {
        text: "Working with Triad Devs has elevated our security posture significantly. Their secure SDLC integration has equipped our developers with the knowledge to write more secure code from the start.",
        name: "James Wilson",
        position: "CTO, HealthData Systems"
      }
    ],
    faqItems: [
      {
        question: "What are the most common security vulnerabilities you address?",
        answer: "We focus on the OWASP Top 10 vulnerabilities including injection flaws, broken authentication, sensitive data exposure, XML external entities (XXE), broken access control, security misconfigurations, cross-site scripting (XSS), insecure deserialization, and insufficient logging/monitoring. We also address more specific vulnerabilities based on your technology stack."
      },
      {
        question: "How do you integrate security into our existing development processes?",
        answer: "We analyze your current workflows and implement security checkpoints throughout the development lifecycle. This includes integrating automated security scanning into your CI/CD pipeline, establishing secure coding guidelines, conducting regular security training, and implementing peer code reviews with security focus."
      },
      {
        question: "What's the difference between penetration testing and vulnerability assessment?",
        answer: "Vulnerability assessment systematically identifies and classifies security vulnerabilities in your systems without exploiting them. Penetration testing goes further by actively exploiting vulnerabilities to demonstrate how attackers might gain access to your systems or data. Both are valuable and complementary approaches to security testing."
      },
      {
        question: "Do you offer developer security training?",
        answer: "Yes, we provide customized security training programs for development teams. These include secure coding workshops, threat modeling sessions, and hands-on training with security tools. Our goal is to build security awareness and skills within your team to create a security-first development culture."
      },
      {
        question: "How frequently should we conduct security assessments?",
        answer: "For most organizations, we recommend quarterly security assessments to identify new vulnerabilities. However, this can vary based on your risk profile, development pace, and compliance requirements. Critical applications or those handling sensitive data may require more frequent reviews, especially after significant changes."
      }
    ],
    ctaSection: {
      title: "Protect Your Applications and Data",
      description: "Don't wait for a security breach to prioritize secure coding. Schedule a consultation to discuss how we can strengthen your application security posture."
    }
  };

  return <PageTemplate {...pageData} />;
};

export default SecureCoding;