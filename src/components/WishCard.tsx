import { useState } from "react";
import { Heart, Sparkles, Star, Rocket, Coffee, Music, Trophy, Smile, Zap, Gift, Sun, Gem, PartyPopper } from "lucide-react";

const wishes = [
  { icon: Heart, text: "May your heart overflow with love and happiness! 💕", color: "text-primary" },
  { icon: Star, text: "Wishing you a year full of dreams coming true! ✨", color: "text-gold" },
  { icon: Sparkles, text: "May every day sparkle with joy and wonder! 🌟", color: "text-lavender" },
  { icon: Heart, text: "Here's to new adventures and beautiful memories! 🎊", color: "text-peach" },
  { icon: Star, text: "May 2027 bring you prosperity and success! 🌈", color: "text-mint" },

  //new wish
  { icon: Rocket, text: "Soar to new heights and conquer your goals! 🚀", color: "text-orange" },
  { icon: Coffee, text: "May your year be filled with warmth and energy! ☕", color: "text-brown" },
  { icon: Music, text: "Wishing you a year of perfect harmony! 🎵", color: "text-indigo" },
  { icon: Trophy, text: "Here's to a year of victories, big and small! 🏆", color: "text-yellow" },
  { icon: Smile, text: "Keep smiling, the best is yet to come! 😊", color: "text-pink" },
  { icon: Zap, text: "May your passion and creativity electrify the world! ⚡", color: "text-cyan" },
  { icon: Gift, text: "Unwrapping 365 days of beautiful surprises! 🎁", color: "text-red" },
  { icon: Sun, text: "May your path be bright and sunny all year long! ☀️", color: "text-amber" },
  { icon: Gem, text: "You are a gem—shine brighter than ever in 2027! 💎", color: "text-emerald" },
  { icon: PartyPopper, text: "Let the celebrations begin! Happy New Year! 🎉", color: "text-rose" },

];

export const WishCard = () => {
  const [currentWish, setCurrentWish] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  const revealNextWish = () => {
    setIsRevealing(true);
    setTimeout(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
      setIsRevealing(false);
    }, 300);
  };

  const wish = wishes[currentWish];
  const IconComponent = wish.icon;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className={`card-cute transition-all duration-300 ${
          isRevealing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`${wish.color} animate-bounce-gentle`}>
            <IconComponent size={48} strokeWidth={1.5} />
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            {wish.text}
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button onClick={revealNextWish} className="btn-cute group">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
            Get Another Wish
            <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
          </span>
        </button>
      </div>
    </div>
  );
};
