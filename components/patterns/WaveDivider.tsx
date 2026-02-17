'use client';

interface WaveDividerProps {
  position?: 'top' | 'bottom' | 'both';
  className?: string;
  fillColor?: string;
  backgroundColor?: string;
}

export default function WaveDivider({
  position = 'bottom',
  className = '',
  fillColor = '#F8FAFB',
}: WaveDividerProps) {
  const topWave = (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-auto"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(180deg)' }}
      >
        <path
          fill={fillColor}
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>
    </div>
  );

  const bottomWave = (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-auto"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fillColor}
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {(position === 'top' || position === 'both') && topWave}
      {(position === 'bottom' || position === 'both') && bottomWave}
    </div>
  );
}

// Animated wave divider variant
export function AnimatedWaveDivider({
  position = 'bottom',
  className = '',
  fillColor = '#F8FAFB',
}: {
  position?: 'top' | 'bottom' | 'both';
  className?: string;
  fillColor?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {(position === 'top' || position === 'both') && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-auto animate-[wave_20s_ease-in-out_infinite]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)', willChange: 'transform' }}
          >
            <path
              fill={fillColor}
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      )}
      {(position === 'bottom' || position === 'both') && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-auto animate-[wave_20s_ease-in-out_infinite]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ willChange: 'transform' }}
          >
            <path
              fill={fillColor}
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
