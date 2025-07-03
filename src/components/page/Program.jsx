import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Header";
import MouseGradient from "../MouseGradient";
import { curve, robot } from "../../assets";
gsap.registerPlugin(ScrollTrigger);

const programVideo = "/robotpro.mp4";
const leftImg = "/head.png";
const rightImg = "/sir.jpg";

const Program = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -120, rotate: -10 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 120, rotate: 10 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <MouseGradient />
      <Header />

      {/* Section 1: Video Background with Centered Content */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={programVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {/* Overlay content */}
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full pl-16 md:pl-32 py-20 gap-8">
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 drop-shadow-lg max-w-2xl break-words leading-tight"
            style={{ fontFamily: "'Anta', sans-serif" }}
          >
            Programme of the <br />
            AIMDA 2026 will <br />
            <span className="inline-block relative mt-6">
              available soon.
              <img
                src={curve}// <-- Use the same curve SVG as in Hero
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={400}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <a
            href="/downloads/program-book.pdf"
            download
            className="px-8 py-4 rounded-2xl border-2 border-[#7f9cf5] bg-[#1a1333] text-white font-bold text-lg md:text-2xl shadow-xl transition-all duration-300 hover:bg-[#2d1e5a] hover:border-[#a78bfa] hover:scale-105"
            style={{
              fontFamily: "'Anta', sans-serif",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 24px 0 rgba(127,156,245,0.18)",
            }}
          >
            Program Book
          </a>
        </div>
      </div>

      {/* Section 2: Two Large Portrait Images with Animation */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-12 py-24">
        {/* Left Image */}
        <div
          ref={leftRef}
          className="w-[90vw] max-w-[400px] h-[600px] md:w-[400px] md:h-[600px] bg-white/10 border-2 border-[#7f9cf5] rounded-3xl shadow-xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            minHeight: 500,
            minWidth: 280,
            cursor: "pointer",
          }}
        >
          <img
            src={leftImg}
            alt="Program Left"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right Image */}
        <div
          ref={rightRef}
          className="w-[90vw] max-w-[400px] h-[600px] md:w-[400px] md:h-[600px] bg-white/10 border-2 border-[#7f9cf5] rounded-3xl shadow-xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            minHeight: 500,
            minWidth: 280,
            cursor: "pointer",
          }}
        >
          <img
            src={rightImg}
            alt="Program Right"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Program;