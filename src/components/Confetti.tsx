"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export const Confetti = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    const COLORS = ['#c9a84c', '#f0d080', '#8b2252', '#d4608a', '#ffffff', '#ffd700', '#ff6b9d', '#a8e6cf'];

    // The original script had a specific logic: stop after 12s, restart every 20s.
    // I'll implement a simplified version that triggers on mount and periodically.

    const triggerConfetti = () => {
      const end = Date.now() + 8 * 1000;

      const internalFrame = () => {
        myConfetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: COLORS,
        });
        myConfetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: COLORS,
        });

        if (Date.now() < end) {
          requestAnimationFrame(internalFrame);
        }
      };
      internalFrame();
    };

    triggerConfetti();
    const interval = setInterval(triggerConfetti, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[999]"
    />
  );
};
