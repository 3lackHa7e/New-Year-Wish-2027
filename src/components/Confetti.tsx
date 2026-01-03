import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

const confettiColors = [
  "hsl(45, 80%, 55%)",
  "hsl(340, 70%, 65%)",
  "hsl(280, 50%, 80%)",
  "hsl(160, 40%, 80%)",
  "hsl(350, 60%, 85%)",
  "hsl(20, 70%, 85%)",
];

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 30; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: Math.random() * 5 + 8,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          size: Math.random() * 8 + 6,
          rotation: Math.random() * 360,
        });
      }
      setPieces(newPieces);
    };

    generateConfetti();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.x}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.5}px`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};
