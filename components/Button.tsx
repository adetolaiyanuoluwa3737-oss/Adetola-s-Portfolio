'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200';

  const variants = {
    primary: 'bg-[#FF6B45] text-white hover:bg-[#E85A35] hover:-translate-y-0.5 shadow-lg shadow-orange-500/25',
    outline: 'border-2 border-[#E2E8F0] text-[#1A1A1A] hover:border-[#FF6B45] hover:text-[#FF6B45]',
    ghost: 'text-[#FF6B45] hover:text-[#E85A35] underline underline-offset-4 decoration-[#FF6B45]/30 hover:decoration-[#E85A35]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href?.startsWith('http') || href?.startsWith('mailto')) {
    return (
      <a href={href} className={cls} target={target || '_blank'} rel={rel || 'noopener noreferrer'}>
        {children}
      </a>
    );
  }

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }

  return <button className={cls} type="button">{children}</button>;
}
