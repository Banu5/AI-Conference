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

      // Animate only the box that changed
      if (boxRefs.seconds.current && seconds !== timeLeft.seconds) {
        gsap.fromTo(
          boxRefs.seconds.current,
          { scale: 1, boxShadow: "0 0 0 0 #7f9cf5" },
          {
            scale: 1.15,
            boxShadow: "0 0 16px 2px #7f9cf5",
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          }
        );
      }
      if (boxRefs.minutes.current && minutes !== timeLeft.minutes) {
        gsap.fromTo(
          boxRefs.minutes.current,
          { scale: 1, boxShadow: "0 0 0 0 #7f9cf5" },
          {
            scale: 1.12,
            boxShadow: "0 0 12px 2px #7f9cf5",
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          }
        );
      }
      if (boxRefs.hours.current && hours !== timeLeft.hours) {
        gsap.fromTo(
          boxRefs.hours.current,
          { scale: 1, boxShadow: "0 0 0 0 #7f9cf5" },
          {
            scale: 1.10,
            boxShadow: "0 0 10px 2px #7f9cf5",
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          }
        );
      }
      if (boxRefs.days.current && days !== timeLeft.days) {
        gsap.fromTo(
          boxRefs.days.current,
          { scale: 1, boxShadow: "0 0 0 0 #7f9cf5" },
          {
            scale: 1.08,
            boxShadow: "0 0 8px 2px #7f9cf5",
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          }
        );
      }

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [timeLeft]);

  const boxClass =
    "flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#232b4e] to-[#1a1a32] border border-n-6 rounded-2xl shadow-2xl text-white text-2xl md:text-3xl font-extrabold backdrop-blur-lg transition-all duration-200";
  const labelClass =
    "text-[0.65rem] md:text-xs font-semibold mt-1 uppercase tracking-wider";
  const sepClass =
    "flex items-center justify-center text-2xl md:text-3xl font-extrabold text-white mx-1 md:mx-2 select-none";

  return (
    <div
      ref={countdownRef}
      className="flex items-center z-30"
      style={{
        background: "rgba(20,24,40,0.7)",
        borderRadius: "2rem",
        padding: "1.2rem 2.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div ref={boxRefs.days} className={boxClass}>
        {timeLeft.days}
        <span
          className={labelClass}
          style={{ fontFamily: "'Anta', sans-serif" }}
        >
          Days
        </span>
      </div>
      <span className={sepClass}>:</span>
      <div ref={boxRefs.hours} className={boxClass}>
        {timeLeft.hours}
        <span className={labelClass}>Hours</span>
      </div>
      <span className={sepClass}>:</span>
      <div ref={boxRefs.minutes} className={boxClass}>
        {timeLeft.minutes}
        <span className={labelClass}>Minutes</span>
      </div>
      <span className={sepClass}>:</span>
      <div ref={boxRefs.seconds} className={boxClass}>
        {timeLeft.seconds}
        <span className={labelClass}>Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;