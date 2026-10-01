import React from 'react';
import { FadeIn } from './FadeIn';

const SERVICES = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive, high-performance web applications with clean component architectures using React and TypeScript."
  },
  {
    number: "02",
    title: "UI/UX Engineering",
    description: "Translating design systems into pixel-perfect, accessible user interfaces with smooth layouts and fluid styling."
  },
  {
    number: "03",
    title: "Animation & Motion",
    description: "Crafting dynamic micro-interactions and scroll-driven timelines using Framer Motion and CSS to elevate digital experiences."
  },
  {
    number: "04",
    title: "State & API Integration",
    description: "Managing robust application state, handling asynchronous endpoints, and optimizing client-side data flow."
  },
  {
    number: "05",
    title: "Deployment & Tooling",
    description: "Version control management via Git/GitHub and seamless CI/CD deployments through Vercel and Netlify."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-24 relative z-20 border-t border-[#D7E2EA]/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn y={30}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#B600A8] font-semibold">What I Do</span>
            <h2 className="hero-heading font-black uppercase tracking-tight mt-2 text-[clamp(2.5rem,8vw,110px)]">
              Services
            </h2>
          </div>
        </FadeIn>

        {/* Compact, Elegant Grid / List Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.08} y={25}>
              <div className="group h-full p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-[#D7E2EA]/30 group-hover:text-[#B600A8] transition-colors">
                      {service.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D7E2EA]/20 group-hover:bg-[#B600A8] transition-colors"></span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#D7E2EA] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};