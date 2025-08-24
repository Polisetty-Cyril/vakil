import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  twProps: string;
}

export const Typewriter = ({ text, speed = 100, twProps }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={twProps}>
      {displayed}
      <span
        className="border-r-2 border-primary animate-pulse ml-1"
        style={{ display: displayed == text ? "none" : "inline" }}
      ></span>
    </span>
  );
};
