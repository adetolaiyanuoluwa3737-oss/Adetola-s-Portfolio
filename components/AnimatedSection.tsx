'use client';

import { useRef, useState, useEffect } from 'react';

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function AnimatedSection({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useVisible();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-up ${visible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
