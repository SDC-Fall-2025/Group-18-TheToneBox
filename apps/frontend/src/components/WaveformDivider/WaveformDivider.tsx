import { useState } from "react";

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
  // Generate random heights and durations for waveform bars - only once on mount
  const [barHeights] = useState(() =>
    Array.from({ length: barCount }, () => Math.random() * 12 + 4)
  );

  const [barDurations] = useState(() =>
    Array.from({ length: barCount }, () => 1 + Math.random() * 0.5)
  );

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {barHeights.map((height, index) => (
        <div
          key={index}
          className="w-0.5 bg-primary rounded-full"
          style={{
            height: `${height}px`,
            animation: animated
              ? `waveform-pulse ${barDurations[index]}s ease-in-out infinite`
              : undefined,
            animationDelay: animated ? `${index * 0.1}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}
