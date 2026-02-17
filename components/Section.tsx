'use client';

import { ReactNode } from 'react';
import WaveDivider from './patterns/WaveDivider';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'gradient';
  waveDivider?: 'top' | 'bottom' | 'both' | 'none';
  containerized?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = '',
  variant = 'light',
  waveDivider = 'none',
  containerized = true,
  id
}: SectionProps) {
  const variantClasses = {
    light: 'bg-[#F8FAFC] text-[#0F172A]',
    dark: 'bg-[#0A1628] text-white',
    gradient: 'bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#2563EB] text-white'
  };

  const content = containerized ? (
    <div className="container">{children}</div>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={`section relative ${variantClasses[variant]} ${className}`}
    >
      {waveDivider !== 'none' && (
        <WaveDivider
          position={waveDivider}
          fillColor={variant === 'light' ? '#F8FAFC' : '#0A1628'}
          className="z-10"
        />
      )}
      {content}
    </section>
  );
}
