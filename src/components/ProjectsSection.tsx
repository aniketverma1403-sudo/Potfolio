import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

const PROJECTS = [
  {
    number: "01",
    category: "Full-Stack / React",
    name: "Shopify E-Commerce Store",
    description: "A fully responsive e-commerce web store featuring product catalogs, interactive cart management, filter systems, and smooth checkout flows.",
    liveUrl: "https://novastore-ecommerce-app.netlify.app/", // Replace with your actual Netlify URL
    images: {
      col1Img1: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop", // Storefront catalog
      col1Img2: "https://images.unsplash.com/photo-1556742049-0a67d5e56d77?q=80&w=1000&auto=format&fit=crop", // Checkout & payment UI
      col2Img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",  // E-commerce dashboard
    }
  },
  {
    number: "02",
    category: "Web Application",
    name: "Job Tracking Application",
    description: "A streamlined job application tracker enabling users to log interviews, track statuses (Applied, Interviewing, Offered), and manage career pipelines.",
    liveUrl: "https://job-application-developer.netlify.app/", // Replace with your actual Netlify URL
    images: {
      col1Img1: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop", // Kanban board
      col1Img2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // Analytics & stats
      col2Img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop", // Workflow dashboard
    }
  },
  {
    number: "03",
    category: "JavaScript & CSS",
    name: "Advanced Calculator",
    description: "A clean, responsive, and precise client-side calculator built with vanilla JavaScript supporting complex arithmetic operations and history logs.",
    liveUrl: "https://aniketverma1403-sudo.github.io/calculator-App/", // Replace with your actual Netlify URL
    images: {
      col1Img1: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop", // Number / Financial UI
      col1Img2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Data interface
      col2Img: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1200&auto=format&fit=crop", // Clean computation UI
    }
  },
  {
    number: "04",
    category: "HTML, CSS, JS",
    name: "Music Player App",
    description: "An immersive web-based audio player featuring custom playback controls, live track progress sliders, album art display, and playlist navigation.",
    liveUrl: "https://your-music-player.netlify.app", // Replace with your actual Netlify URL
    images: {
      col1Img1: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop", // Audio setup
      col1Img2: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop", // Live concert / track vibes
      col2Img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop", // Music player dashboard
    }
  }
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef} 
      className="h-[88vh] sticky top-24 md:top-32 flex items-center justify-center"
      style={{ top: `${6 + index * 24}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[35px] sm:rounded-[45px] md:rounded-[55px] border-2 border-[#D7E2EA]/20 bg-[#121212] p-5 sm:p-7 md:p-9 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.2rem,6vw,85px)] leading-none text-[#D7E2EA]">
              {project.number}
            </span>
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B600A8] font-semibold block mb-0.5">
                {project.category}
              </span>
              <h3 className="font-bold uppercase text-[clamp(1.1rem,2.2vw,2rem)] text-[#D7E2EA]">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-1 max-w-lg">
                {project.description}
              </p>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Bottom Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 mt-4 h-[58%]">
          {/* Left Column (40%) */}
          <div className="md:col-span-5 flex flex-col gap-3.5 h-full">
            <img
              src={project.images.col1Img1}
              alt={project.name}
              className="w-full h-[clamp(100px,13vw,190px)] rounded-[24px] sm:rounded-[32px] object-cover border border-[#D7E2EA]/10"
            />
            <img
              src={project.images.col1Img2}
              alt={project.name}
              className="w-full h-[clamp(120px,16vw,240px)] rounded-[24px] sm:rounded-[32px] object-cover flex-1 border border-[#D7E2EA]/10"
            />
          </div>

          {/* Right Column (60%) */}
          <div className="md:col-span-7 h-full">
            <img
              src={project.images.col2Img}
              alt={project.name}
              className="w-full h-full rounded-[24px] sm:rounded-[32px] object-cover border border-[#D7E2EA]/10"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-36 px-5 sm:px-8 md:px-10 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn y={40}>
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#B600A8] font-semibold">Featured Work</span>
            <h2 className="hero-heading font-black uppercase tracking-tight mt-2 text-[clamp(3rem,12vw,160px)]">
              Projects
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} totalCards={PROJECTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
};