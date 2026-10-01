import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      <HeroSection onContactClick={scrollToContact} />
      <MarqueeSection />
      <AboutSection onContactClick={scrollToContact} />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}