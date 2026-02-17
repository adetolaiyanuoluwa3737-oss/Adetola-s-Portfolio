'use client';

interface SapphireBackgroundProps {
  variant?: 'hero' | 'jewel' | 'mesh' | 'faceted';
  animated?: boolean;
  withShimmer?: boolean;
  className?: string;
}

export default function SapphireBackground({
  variant = 'hero',
  animated = true,
  withShimmer = true,
  className = ''
}: SapphireBackgroundProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'jewel':
        return 'bg-jewel';
      case 'mesh':
        return 'bg-mesh';
      case 'faceted':
        return 'bg-faceted';
      default:
        return 'bg-gradient-hero';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main gradient background */}
      <div className={`absolute inset-0 ${getBackgroundClass()}`} />

      {/* Radial gradient overlays for depth */}
      {animated && (
        <>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
              animation: 'meshFlow 15s ease-in-out infinite'
            }}
          />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background: 'radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.4) 0%, transparent 50%)',
              animation: 'meshFlow 20s ease-in-out infinite reverse'
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.35) 0%, transparent 60%)',
              animation: 'meshFlow 25s ease-in-out infinite'
            }}
          />
        </>
      )}

      {/* Shimmer effect overlay */}
      {withShimmer && (
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.7) 50%, transparent 100%)',
            animation: 'shimmer 8s ease-in-out infinite',
            willChange: 'transform'
          }}
        />
      )}

      {/* Subtle noise texture for depth */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}

// Simplified variant for lighter sections
export function SapphireBackgroundLight({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)'
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: 'radial-gradient(circle at 30% 40%, #2563EB 0%, transparent 50%)'
        }}
      />
    </div>
  );
}
