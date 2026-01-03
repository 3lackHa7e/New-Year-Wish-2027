export const YearBadge = () => {
  return (
    <div className="relative inline-block">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-gold to-primary opacity-50 animate-pulse" />
        
        {/* Main badge */}
        <div className="relative bg-gradient-to-br from-gold via-accent to-gold rounded-full px-8 py-4 shadow-lg animate-pulse-glow">
          <span className="text-6xl md:text-8xl font-pacifico text-foreground drop-shadow-lg">
            2027
          </span>
        </div>

        {/* Decorative stars */}
        <div className="absolute -top-4 -left-4 text-2xl animate-wiggle">✨</div>
        <div className="absolute -top-2 -right-6 text-3xl animate-wiggle" style={{ animationDelay: "0.5s" }}>⭐</div>
        <div className="absolute -bottom-3 -left-6 text-2xl animate-wiggle" style={{ animationDelay: "0.3s" }}>🌟</div>
        <div className="absolute -bottom-4 -right-4 text-2xl animate-wiggle" style={{ animationDelay: "0.7s" }}>💫</div>
      </div>
    </div>
  );
};
