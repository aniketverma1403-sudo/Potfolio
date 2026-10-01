import React from 'react';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { FadeIn } from './FadeIn';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-75 transition-opacity duration-200">About</a>
          <a href="#services" className="hover:opacity-75 transition-opacity duration-200">Price</a>
          <a href="#projects" className="hover:opacity-75 transition-opacity duration-200">Projects</a>
          <a href="#contact" onClick={onContactClick} className="hover:opacity-75 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>

      {/* Center Heading (Clean top placement with responsive sizing so full name is visible) */}
      <div className="w-full overflow-hidden mt-4 sm:mt-6 px-4 text-center z-20">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[15vw]">
            Hi, i&apos;m aniket
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet effect (Centered perfectly in the middle layer) */}
      <Magnet 
        padding={150} 
        strength={3} 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] top-[48%] -translate-y-1/2 sm:top-[50%] pointer-events-none"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Aniket Verma - Frontend Developer"
            className="w-full h-auto object-cover pointer-events-auto select-none"
          />
        </FadeIn>
      </Magnet>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a frontend developer driven by crafting striking and unforgettable web applications
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};