import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const colors = [
  "hsl(45, 80%, 55%)", // gold
  "hsl(340, 70%, 65%)", // pink
  "hsl(280, 50%, 80%)", // lavender
  "hsl(0, 0%, 100%)", // white
];

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 50; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
};
