import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ 
  href,
  onClick, 
  className = "", 
  label = "Live Project" 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:border-white transition-all duration-300 cursor-pointer ${className}`}
    >
      {label}
    </a>
  );
};