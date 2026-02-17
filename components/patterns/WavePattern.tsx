'use client';

interface WavePatternProps {
  className?: string;
  opacity?: number;
  animate?: boolean;
  color?: string;
  position?: 'top' | 'bottom' | 'center';
}

export default function WavePattern({
  className = '',
  opacity = 0.15,
  animate = false,
  color = '#3B82F6',
  position = 'center'
}: WavePatternProps) {
  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return 'top-0';
      case 'bottom':
        return 'bottom-0';
      default:
        return 'top-1/2 -translate-y-1/2';
    }
  };

  return (
    <div
      className={`absolute left-0 w-full overflow-hidden pointer-events-none ${getPositionStyles()} ${className}`}
      style={{ opacity }}
    >
      <svg
        className={`w-full h-auto ${animate ? 'animate-wave' : ''}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: position === 'bottom' ? 'scaleY(-1)' : 'none',
          willChange: animate ? 'transform' : 'auto'
        }}
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

// Multi-layer wave component for more depth
export function WavePatternLayered({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <WavePattern opacity={0.12} color="#3B82F6" position="top" />
      <WavePattern opacity={0.15} color="#2563EB" position="center" animate />
      <WavePattern opacity={0.18} color="#1E3A8A" position="bottom" />
    </div>
  );
}
