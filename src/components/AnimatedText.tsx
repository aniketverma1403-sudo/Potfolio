import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIndex) => {
        // const start = wordIndex / words.length;
        // const end = start + 1 / words.length;
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
            {word.split('').map((char, charIndex) => {
              // Calculate index across the entire string for smooth progressive reveal
              const charGlobalIndex = wordIndex * 5 + charIndex;
              const totalChars = text.length;
              const charStart = charGlobalIndex / totalChars * 0.7;
              const charEnd = charStart + 0.3;

              const opacity = useTransform(
                scrollYProgress,
                [Math.max(0, charStart), Math.min(1, charEnd)],
                [0.2, 1]
              );

              return (
                <motion.span
                  key={charIndex}
                  style={{ opacity }}
                  className="inline-block transition-colors"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};