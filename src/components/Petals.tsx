"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  top: string;
  color: string;
  opacity: number;
  width: number;
  height: number;
  duration: string;
  delay: string;
}

const PETAL_COLORS = ['#c9a84c', '#f0d080', '#8b2252', '#d4608a', '#fff0c8'];

export const Petals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -20}%`,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      opacity: Math.random() * 0.5 + 0.2,
      width: Math.random() * 8 + 6,
      height: Math.random() * 12 + 8,
      duration: `${(Math.random() * 10 + 8).toFixed(1)}s`,
      delay: `${(Math.random() * 12).toFixed(1)}s`,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div id="petals" className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-[50%_0_50%_0] animate-fall opacity-0"
          style={{
            left: petal.left,
            top: petal.top,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            width: `${petal.width}px`,
            height: `${petal.height}px`,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-60px) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};
