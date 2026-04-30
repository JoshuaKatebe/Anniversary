"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: string;
  opacity: string;
  delay: string;
}

export const Stars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${(Math.random() * 4 + 2).toFixed(1)}s`,
      opacity: `${(Math.random() * 0.7 + 0.1).toFixed(2)}`,
      delay: `${(Math.random() * 5).toFixed(1)}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gold-light animate-twinkle opacity-0"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            // @ts-expect-error custom-vars
            "--twinkle-duration": star.duration,
            "--twinkle-opacity": star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0.6); }
          100% { opacity: var(--twinkle-opacity); transform: scale(1.2); }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};
