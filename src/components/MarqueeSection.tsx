import React, { useEffect, useState } from 'react';

// Your actual frontend projects and technical stack items
const DEV_ITEMS = [
  { title: "WEATHER WEB APP", subtitle: "OpenWeather API & JavaScript", tag: "PROJECT" },
  { title: "REACT COUNTER", subtitle: "State History & Undo/Redo", tag: "REACT" },
  { title: "HTML5 & CSS3", subtitle: "Semantic Markup & Flexbox/Grid", tag: "CORE" },
  { title: "PASSWORD GENERATOR", subtitle: "DOM Manipulation & Crypto", tag: "JAVASCRIPT" },
  { title: "TASK MANAGEMENT APP", subtitle: "CRUD Operations & LocalStorage", tag: "PROJECT" },
  { title: "JAVASCRIPT (ES6+)", subtitle: "Events, Async/Await, & Fetch", tag: "CORE" },
  { title: "QUICK NOTES APP", subtitle: "Browser Storage & DOM", tag: "PROJECT" },
  { title: "REACT.JS & VITE", subtitle: "Hooks, Components & Routing", tag: "FRONTEND" },
  { title: "RANDOM QUOTE GEN", subtitle: "API Integration & Share Tools", tag: "PROJECT" },
  { title: "TAILWIND CSS", subtitle: "Utility-First Responsive Design", tag: "STYLING" },
  { title: "MUSIC PLAYER APP", subtitle: "HTML Audio Element & Handlers", tag: "PROJECT" },
  { title: "GIT & GITHUB", subtitle: "Version Control & Deployment", tag: "TOOLS" },
  { title: "QR CODE GENERATOR", subtitle: "Client-side Library & Glassmorphism", tag: "PROJECT" },
  { title: "TYPESCRIPT", subtitle: "Type Safety & Interfaces", tag: "LANGUAGE" },
];

export const MarqueeSection: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const relativeScroll = Math.max(0, (scrollOffset - sectionTop + window.innerHeight) * 0.25);

  const row1Items = [...DEV_ITEMS.slice(0, 7), ...DEV_ITEMS.slice(0, 7), ...DEV_ITEMS.slice(0, 7)];
  const row2Items = [...DEV_ITEMS.slice(7), ...DEV_ITEMS.slice(7), ...DEV_ITEMS.slice(7)];

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-12 bg-[#0C0C0C] overflow-hidden border-y border-[#D7E2EA]/10">
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves RIGHT */}
        <div 
          className="flex gap-4 will-change-transform whitespace-nowrap"
          style={{ transform: `translateX(${relativeScroll - 150}px)` }}
        >
          {row1Items.map((item, i) => (
            <div
              key={`r1-${i}`}
              className="w-[340px] sm:w-[380px] h-[150px] rounded-2xl bg-[#141414] border border-[#D7E2EA]/15 p-6 flex flex-col justify-between shrink-0 hover:border-[#B600A8] transition-colors duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest px-2.5 py-1 rounded-full bg-[#B600A8]/20 text-[#B600A8] font-semibold uppercase">
                  {item.tag}
                </span>
                <span className="text-xs uppercase tracking-widest opacity-40">ANIKET.DEV</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#D7E2EA] tracking-wide uppercase">{item.title}</h4>
                <p className="text-xs text-[#D7E2EA]/60 font-light mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT */}
        <div 
          className="flex gap-4 will-change-transform whitespace-nowrap"
          style={{ transform: `translateX(-${relativeScroll - 150}px)` }}
        >
          {row2Items.map((item, i) => (
            <div
              key={`r2-${i}`}
              className="w-[340px] sm:w-[380px] h-[150px] rounded-2xl bg-[#141414] border border-[#D7E2EA]/15 p-6 flex flex-col justify-between shrink-0 hover:border-[#B600A8] transition-colors duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest px-2.5 py-1 rounded-full bg-[#7621B0]/20 text-[#D7E2EA] font-semibold uppercase">
                  {item.tag}
                </span>
                <span className="text-xs uppercase tracking-widest opacity-40">FRONTEND</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#D7E2EA] tracking-wide uppercase">{item.title}</h4>
                <p className="text-xs text-[#D7E2EA]/60 font-light mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};