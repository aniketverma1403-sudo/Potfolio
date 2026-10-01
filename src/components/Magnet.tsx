import React, { useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (
      Math.abs(distanceX) < rect.width / 2 + padding &&
      Math.abs(distanceY) < rect.height / 2 + padding
    ) {
      setPosition({ x: distanceX / strength, y: distanceY / strength });
      setIsHovered(true);
    } else {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
};  