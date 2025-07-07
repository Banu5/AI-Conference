import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const targetDate = new Date("2026-01-04T00:00:00");

const pad = (n) => n.toString().padStart(2, "0");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  const boxRefs = {
    days: useRef(null),
    hours: useRef(null),
    minutes: useRef(null),
    seconds: useRef(null),
  };
  const countdownRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    if (countdownRef.current) {
      gsap.fromTo(
        countdownRef.current,
        { y: -40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  // Tick animation
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }
      const days = pad(Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((diff / (1000 * 60 * 60)) % 24));
      const minutes = pad(Math.floor((diff / (1000 * 60)) % 60));
      const seconds = pad(Math.floor((diff / 1000) % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={countdownRef}
      className="flex items-center justify-center gap-2 md:gap-6 w-full h-full"
      style={{
        padding: 0,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <span
          ref={boxRefs.days}
          className="font-extrabold text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[5rem] leading-none tracking-tight text-white"
          style={{
            fontFamily: "'Oswald', 'Bebas Neue', 'Barlow Condensed', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {timeLeft.days}
        </span>
        <span className="text-[0.7rem] md:text-sm font-semibold mt-1 uppercase tracking-wider text-white/70">
          Days
        </span>
      </div>
      <span
        className="mx-1 md:mx-2 select-none flex items-center"
        style={{
          lineHeight: 1,
          height: "2.2rem",
          color: "white",
          fontWeight: 800,
          fontSize: "2rem",
          alignSelf: "center",
        }}
      >
        |
      </span>
      <div className="flex flex-col items-center justify-center">
        <span
          ref={boxRefs.hours}
          className="font-extrabold text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[5rem] leading-none tracking-tight text-white"
          style={{
            fontFamily: "'Oswald', 'Bebas Neue', 'Barlow Condensed', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {timeLeft.hours}
        </span>
        <span className="text-[0.7rem] md:text-sm font-semibold mt-1 uppercase tracking-wider text-white/70">
          Hours
        </span>
      </div>
      <span
        className="mx-1 md:mx-2 select-none flex items-center"
        style={{
          lineHeight: 1,
          height: "2.2rem",
          color: "white",
          fontWeight: 800,
          fontSize: "2rem",
          alignSelf: "center",
        }}
      >
        |
      </span>
      <div className="flex flex-col items-center justify-center">
        <span
          ref={boxRefs.minutes}
          className="font-extrabold text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[5rem] leading-none tracking-tight text-white"
          style={{
            fontFamily: "'Oswald', 'Bebas Neue', 'Barlow Condensed', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {timeLeft.minutes}
        </span>
        <span className="text-[0.7rem] md:text-sm font-semibold mt-1 uppercase tracking-wider text-white/70">
          Minutes
        </span>
      </div>
      <span
        className="mx-1 md:mx-2 select-none flex items-center"
        style={{
          lineHeight: 1,
          height: "2.2rem",
          color: "white",
          fontWeight: 800,
          fontSize: "2rem",
          alignSelf: "center",
        }}
      >
        |
      </span>
      <div className="flex flex-col items-center justify-center">
        <span
          ref={boxRefs.seconds}
          className="font-extrabold text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[5rem] leading-none tracking-tight text-white"
          style={{
            fontFamily: "'Oswald', 'Bebas Neue', 'Barlow Condensed', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {timeLeft.seconds}
        </span>
        <span className="text-[0.7rem] md:text-sm font-semibold mt-1 uppercase tracking-wider text-white/70">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default Countdown;