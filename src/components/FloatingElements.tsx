export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating stars */}
      <div className="absolute top-[10%] left-[10%] text-6xl animate-float opacity-40" style={{ animationDelay: "0s" }}>
        ⭐
      </div>
      <div className="absolute top-[20%] right-[15%] text-4xl animate-float opacity-30" style={{ animationDelay: "1s" }}>
        ✨
      </div>
      <div className="absolute top-[60%] left-[5%] text-5xl animate-float opacity-35" style={{ animationDelay: "2s" }}>
        🌟
      </div>
      <div className="absolute top-[40%] right-[8%] text-4xl animate-float opacity-25" style={{ animationDelay: "3s" }}>
        💫
      </div>
      <div className="absolute bottom-[30%] left-[20%] text-3xl animate-float opacity-30" style={{ animationDelay: "1.5s" }}>
        ⭐
      </div>
      <div className="absolute bottom-[20%] right-[25%] text-5xl animate-float opacity-40" style={{ animationDelay: "2.5s" }}>
        ✨
      </div>

      {/* Floating hearts */}
      <div className="absolute top-[30%] left-[25%] text-4xl animate-float opacity-25" style={{ animationDelay: "0.5s" }}>
        💖
      </div>
      <div className="absolute bottom-[40%] right-[10%] text-3xl animate-float opacity-30" style={{ animationDelay: "3.5s" }}>
        💕
      </div>

      {/* Celebration elements */}
      <div className="absolute top-[15%] left-[50%] text-4xl animate-float opacity-35" style={{ animationDelay: "1.2s" }}>
        🎊
      </div>
      <div className="absolute bottom-[15%] left-[40%] text-5xl animate-float opacity-30" style={{ animationDelay: "2.8s" }}>
        🎉
      </div>
    </div>
  );
};
