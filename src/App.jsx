import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Header/Navbar';
import Footer from './components/layout/Footer/Footer';

// Pages
import Home from './components/Home/Home';

// Full-Stack Pages
import WebDevelopment from './components/layout/Pages/WebDevelopment/WebDevelopment';
import MobileDevelopment from './components/layout/Pages/MobileDevelopment/MobileDevelopment';

// Our Services Pages
import SecureCoding from './components/layout/Pages/SecureCoding/SecureCoding';
import AIIntegration from './components/layout/Pages/AIIntegration/AIIntegration';
import CloudSolutions from './components/layout/Pages/CloudSolutions/CloudSolutions';

// Cloud Hosting Pages
import CloudMigration from './components/layout/Pages/CloudMigration/CloudMigration';
import SSLCertificates from './components/layout/Pages/SSLCertificates/SSLCertificates';
import Domain from './components/layout/Pages/Domain/Domain';
import PerformanceTesting from './components/layout/Pages/PerformanceTesting/PerformanceTesting';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Full-Stack Routes */}
        <Route path="/Web_Development" element={<WebDevelopment />} />
        <Route path="/Mobile_Development" element={<MobileDevelopment />} />
        
        {/* Our Services Routes */}
        <Route path="/Secure_Coding" element={<SecureCoding />} />
        <Route path="/AI_Integration" element={<AIIntegration />} />
        <Route path="/Cloud_Solutions" element={<CloudSolutions />} />
        
        {/* Cloud Hosting Routes */}
        <Route path="/Cloud_Migration" element={<CloudMigration />} />
        <Route path="/SSL_Certificates" element={<SSLCertificates />} />
        <Route path="/Domain" element={<Domain />} />
        <Route path="/Performance_Testing" element={<PerformanceTesting />} />
      </Routes>
      <Footer />
    </Router>
  );
}