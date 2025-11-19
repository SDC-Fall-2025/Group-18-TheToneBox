import { useMemo } from "react";

interface WaveformDividerProps {
  barCount?: number;
  animated?: boolean;
  className?: string;
}

export default function WaveformDivider({
  barCount = 16,
  animated = true,
  className = "",
}: WaveformDividerProps) {
  // Generate random heights for waveform bars
  const barHeights = useMemo(() => {
    return Array.from({ length: barCount }, () => {
      return Math.random() * 12 + 4; // Random height between 4px and 16px
    });
  }, [barCount]);

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {barHeights.map((height, index) => (
        <div
          key={index}
          className={`w-0.5 bg-primary rounded-full ${
            animated ? "animate-pulse" : ""
          }`}
          style={{
            height: `${height}px`,
            animationDelay: animated ? `${index * 0.1}s` : undefined,
            animationDuration: animated
              ? `${1 + Math.random() * 0.5}s`
              : undefined,
          }}
        />
      ))}
    </div>
  );
}
