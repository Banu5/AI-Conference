import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Collaboration = () => {
  const parallaxImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxImgRef.current) {
        const rect = parallaxImgRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate parallax: move image up to 40px as it enters viewport
        const offset = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );
        gsap.to(parallaxImgRef.current, {
          y: offset * 40 - 20, // -20px to +20px
          ease: "power1.out",
          duration: 0.5,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section crosses>
      <div className="container flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
        {/* Left Box */}
        <div className="w-full md:w-1/2 flex flex-col justify-between relative rounded-3xl border border-[#7f9cf5]/40 shadow-lg min-h-[22rem] md:min-h-[36rem] overflow-hidden mb-4 md:mb-0">
          {/* Background image */}
          <img
            src="/bg4.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Content */}
          <div className="relative z-20 flex flex-col h-full p-4 md:p-8">
            <h2
              className="h1 mb-4 font-anta"
              style={{ fontFamily: "'Anta', sans-serif" }}
            >
              Welcome to AIMDA
            </h2>
            <div className="flex-1 flex items-center">
              <p className="mb-0 text-base md:text-xl font-normal text-white/90 leading-relaxed text-justify">
                AIMDA 2026 is an international conference organized by the
                Multidisciplinary AI Research Centre (MARC) of the University of
                Peradeniya and gapHQ, dedicated to showcasing the transformative
                role of Artificial Intelligence across diverse sectors. Hosted by
                gapHQ, Colombo, the conference brings together global experts
                from academia, industry, and policy to explore real-world AI
                applications and foster responsible, multidisciplinary innovation
                for global impact.
              </p>
            </div>
            <div className="flex justify-end mt-6">
              <Link to="/about">
                <Button className="px-8 py-4 text-lg md:text-xl font-bold">
                  About us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Two stacked boxes */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8 justify-between">
          {/* Top: Countdown */}
          <div className="flex-1 bg-transparent border border-[#7f9cf5]/40 rounded-3xl shadow-lg flex items-center justify-center min-h-[8rem] md:min-h-[12rem]">
            <Countdown />
          </div>
          {/* Bottom: Video */}
          <div className="flex-1 bg-transparent border border-[#7f9cf5]/40 rounded-3xl shadow-lg overflow-hidden relative min-h-[8rem] md:min-h-[12rem] flex items-center justify-center">
            <video
              src="/logos.mp4"
              className="w-full h-full object-cover rounded-3xl"
              style={{ display: "block" }}
              autoPlay
              loop
              muted
              playsInline
              poster="/about-video-poster.jpg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
