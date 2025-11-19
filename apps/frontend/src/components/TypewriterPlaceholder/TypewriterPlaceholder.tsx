import { useEffect, useState } from "react";

interface TypewriterPlaceholderProps {
  text: string;
  typingSpeed?: number;
  blinkCount?: number;
  blinkSpeed?: number;
  pauseAfterTyping?: number;
  className?: string;
}

export default function TypewriterPlaceholder({
  text,
  typingSpeed = 100,
  blinkCount = 3,
  blinkSpeed = 500,
  pauseAfterTyping = 0,
  className = "",
}: TypewriterPlaceholderProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [blinkCounter, setBlinkCounter] = useState(0);

  // Typing effect
  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && isTyping) {
      setIsTyping(false);
      setBlinkCounter(0);
    }
  }, [currentIndex, isTyping, text, typingSpeed]);

  // Cursor blink after typing completes, then restart
  useEffect(() => {
    if (!isTyping && blinkCounter < blinkCount * 2) {
      const timeout = setTimeout(() => {
        setShowCursor((prev) => !prev);
        setBlinkCounter(blinkCounter + 1);
      }, blinkSpeed);
      return () => clearTimeout(timeout);
    } else if (blinkCounter >= blinkCount * 2) {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setIsTyping(true);
        setShowCursor(true);
      }, pauseAfterTyping);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, blinkCounter, blinkCount, blinkSpeed, pauseAfterTyping]);

  return (
    <span className={`text-default-400 pointer-events-none ${className}`}>
      {displayText}
      <span
        className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </span>
  );
}
