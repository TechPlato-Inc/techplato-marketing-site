'use client';

import { useRef, useState, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  ariaLabel,
  strength = 0.3,
}: MagneticButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0,0,0)');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setTransform(`translate3d(${x * strength}px, ${y * strength}px, 0)`);
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform('translate3d(0,0,0)');
  }, []);

  const sharedClassName = `inline-block transition-transform duration-300 ease-out ${className}`;
  const sharedStyle = { transform };

  if (href) {
    return (
      <a
        ref={anchorRef}
        className={sharedClassName}
        style={sharedStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={divRef}
      className={sharedClassName}
      style={sharedStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}
