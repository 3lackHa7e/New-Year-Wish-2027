import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2027-01-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="card-cute min-w-[80px] md:min-w-[100px] text-center animate-pulse-glow">
        <span className="text-3xl md:text-5xl font-bold text-gradient font-quicksand">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-3 text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
