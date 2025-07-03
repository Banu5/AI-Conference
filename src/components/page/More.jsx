import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import MouseGradient from "../MouseGradient";
import MissionBox from "../MissionBox";
import ContactSection from "../ContactSection";

const images = [
  "/m1.jpg",
  "/m2.jpg",
  "/m3.jpg",
  "/m4.jpg",
  "/m5.jpg",
];

const missionImages = [
  "/m3.jpg",
  "/a1.jpg",
  "/a2.jpg",
  "/a1.jpg",
  "/a2.jpg",
];

const More = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Manual slide
  const goTo = (idx) => setCurrent(idx);

  // Mission image slider
  const [missionCurrent, setMissionCurrent] = useState(0);
  const missionTimeoutRef = useRef(null);

  useEffect(() => {
    missionTimeoutRef.current = setTimeout(() => {
      setMissionCurrent((prev) => (prev + 1) % missionImages.length);
    }, 3000);
    return () => clearTimeout(missionTimeoutRef.current);
  }, [missionCurrent]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed, non-moving background */}
      <div
        className="fixed inset-0 w-screen h-screen z-0"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-black/40 z-0" />
      {/* MouseGradient overlay */}
      <MouseGradient />

      <div className="relative z-10">
        <Header />

        {/* Banner Slider */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Image */}
          <img
            src={images[current]}
            alt={`Banner ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />
          {/* Darker, wider left gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-transparent to-60%" />
          {/* Text on left, more padding */}
          <div className="absolute z-20 top-0 left-0 h-full flex flex-col justify-center pl-24 md:pl-40 max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Anta', sans-serif" }}>
              Venue of the AIMDA 2026<br />
              <a
                href="https://maps.google.com/?q=gapHQ, 120/10A, Vidya Mawatha, Colombo 07, Sri Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-1.5 rounded-xl border-[1.5px] bg-black text-lg md:text-xl text-white transition-all duration-300 shadow-lg
                  hover:scale-105 hover:text-[#7f9cf5]"
                style={{
                  borderImage: "linear-gradient(90deg, #7f9cf5, #a78bfa, #2d1e5a) 1",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px 0 rgba(127,156,245,0.18)",
                  fontWeight: "normal",
                  fontFamily: "inherit",
                }}
              >
                See Location
              </a>
            </h1>
            <p className="text-white/90 text-lg md:text-2xl max-w-xl mt-4">
              Nested in the heart of Colombo 07, our elite location has ample parking and is a mere walking distance to historical landmarks, restaurants, coffee shops, transport networks, and is close to many major scientific and professional organizations
            </p>
          </div>
          {/* Slider dots/buttons */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${current === idx ? "bg-[#7f9cf5]" : "bg-white/30"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* New Section: Image left, MissionBox right */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-24 py-16">
          {/* Left: Sliding Image */}
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden flex-1">
            <img
              src={missionImages[missionCurrent]}
              alt={`Mission Slide ${missionCurrent + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          {/* Right: Mission Box */}
          <MissionBox />
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default More;