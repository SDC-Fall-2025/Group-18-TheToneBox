interface EqualizerIconProps {
  size?: number;
  className?: string;
}

export default function EqualizerIcon({ size = 18, className = "" }: EqualizerIconProps) {
  return (
    <div
      className={`flex items-end gap-[2px] ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="w-[2px] bg-primary rounded-t-sm"
        style={{
          animation: "equalizer-bounce 0.8s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />
      <div
        className="w-[2px] bg-primary rounded-t-sm"
        style={{
          animation: "equalizer-bounce 1.2s ease-in-out infinite",
          animationDelay: "0.2s",
        }}
      />
      <div
        className="w-[2px] bg-primary rounded-t-sm"
        style={{
          animation: "equalizer-bounce 0.9s ease-in-out infinite",
          animationDelay: "0.4s",
        }}
      />
      <div
        className="w-[2px] bg-primary rounded-t-sm"
        style={{
          animation: "equalizer-bounce 1.1s ease-in-out infinite",
          animationDelay: "0.1s",
        }}
      />
    </div>
  );
}
