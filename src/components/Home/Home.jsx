import React from 'react'
import HeroSection from '../Sections/HeroSection/HeroSection'
import SloganSection from '../Sections/SloganSection/SloganSection'
import EmpoweringSection from '../Sections/EmpoweringSection/EmpoweringSection'
import ServicesSection from '../Sections/ServicesSection/ServicesSection'
import ProcessSection from '../Sections/ProcessSection/ProcessSection'
import ChooseUsSection from '../Sections/ChooseUsSection/ChooseUsSection'
import AIIntegrationSection from '../Sections/AIIntegrationSection/AIIntegrationSection'

import CloudSection from '../Sections/CloudSection/CloudSection'
import FAQSection from '../Sections/FAQSection/FAQSection'
import FullStackSection from '../Sections/FullStackSection/FullStackSection'

export default function Home() {
  return (
    <div>
        <HeroSection />

        <SloganSection 
          title="Driving Digital Success with Development & Security" 
        />

        <EmpoweringSection />
        <ServicesSection />

        <SloganSection 
          title="Building Secure Digital Futures, One Solution at a Time." 
          showButton={true} 
          buttonText="Know More"
          buttonLink="https://triaddevs.fillout.com/schedule"
        />

        <ProcessSection />
        
        <SloganSection 
          title="Build great products with TDS Development Services." 
          showButton={true} 
          buttonText="Get Started"
          buttonLink="https://triaddevs.fillout.com/schedule"
        />

        <ChooseUsSection />
        <AIIntegrationSection />
        <FullStackSection />
        <CloudSection />
        <FAQSection />
        
    </div>
  )
}
