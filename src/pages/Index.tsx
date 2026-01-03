import { Sparkles } from "@/components/Sparkles";
import { Confetti } from "@/components/Confetti";
import { Countdown } from "@/components/Countdown";
import { WishCard } from "@/components/WishCard";
import { FloatingElements } from "@/components/FloatingElements";
import { YearBadge } from "@/components/YearBadge";
import { PartyPopper, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <Sparkles />
      <Confetti />
      <FloatingElements />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <PartyPopper className="w-8 h-8 text-gold animate-wiggle" />
            <span className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              Get Ready for
            </span>
            <PartyPopper className="w-8 h-8 text-gold animate-wiggle" style={{ animationDelay: "0.5s" }} />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-pacifico mb-6 text-gradient leading-tight">
            Happy New Year!
          </h1>

          <div className="mb-8">
            <YearBadge />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto font-medium">
            A new chapter awaits ✨ May it be filled with 
            <span className="text-primary"> love</span>, 
            <span className="text-gold"> joy</span>, and 
            <span className="text-lavender"> endless possibilities</span>!
          </p>
        </div>

        {/* Countdown Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl">⏰</span>
            Countdown to 2027
            <span className="text-2xl">🎊</span>
          </h2>
          <Countdown />
        </div>

        {/* Wish Section */}
        <div className="w-full max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary animate-bounce-gentle" />
            Your Special Wish
            <Heart className="w-6 h-6 text-primary animate-bounce-gentle" style={{ animationDelay: "0.5s" }} />
          </h2>
          <WishCard />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            for a wonderful 2027
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-3xl">
            <span className="animate-bounce-gentle">🎆</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: "0.2s" }}>🎇</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: "0.4s" }}>🎆</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
