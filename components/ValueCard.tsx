'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ValueCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  index?: number;
}

export default function ValueCard({ title, description, icon, index = 0 }: ValueCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`faceted-card rounded-2xl p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      {icon && (
        <div className="mb-6 text-[#2563EB] w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 glow-effect">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">
        {title}
      </h3>
      <p className="text-[#64748B] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
