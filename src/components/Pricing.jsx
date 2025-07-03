import { useEffect, useRef } from "react";
import Section from "./Section";
import { smallSphere, stars, grid } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const boxRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    if (sphereRef.current) {
      gsap.fromTo(
        sphereRef.current,
        { scale: 1 },
        {
          scale: 1.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sphereRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            ref={sphereRef}
            src={smallSphere}
            className="relative z-1 will-change-transform"
            width={255}
            height={255}
            alt="Sphere"
            style={{ transition: "transform 0.3s cubic-bezier(.4,2,.6,1)" }}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Large and clear topics */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold font-anta mb-6 leading-tight text-white"
            style={{ fontFamily: "'Anta', sans-serif" }}
          >
            Paper Publishing
          </h2>
          <p
            className="text-xl md:text-2xl text-white/90 font-anta mb-2 leading-snug"
            style={{ fontFamily: "'Anta', sans-serif" }}
          >
            The best selected peer-reviewed full papers will be published in Springer Nature as an e-proceedings.
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[28rem] py-12">
          <div
            ref={boxRef}
            className={`
              relative p-4 xl:p-6 rounded-[2.4375rem]
              bg-n-8 bg-opacity-95
              border-2 border-[#7f9cf5] shadow-xl
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              w-full max-w-4xl
              flex flex-col items-center
              ring-2 ring-[#7f9cf5]/40
              hover:ring-4 hover:ring-[#7f9cf5]/70
              before:content-[''] before:absolute before:inset-0 before:rounded-[2.4375rem]
              before:pointer-events-none before:shadow-[0_0_32px_8px_rgba(127,156,245,0.35)]
              overflow-hidden
            `}
            style={{
              background: "#181c28",
              boxShadow: "0 8px 32px 0 rgba(127,156,245,0.18), 0 0 32px 8px rgba(127,156,245,0.25)",
              willChange: "transform, opacity",
            }}
          >
            {/* Grid background image like roadmap */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
              <img
                src={grid}
                alt="Grid"
                className="w-full h-full object-cover opacity-30"
                width={420}
                height={320}
              />
            </div>
            <div className="relative z-1 flex flex-col items-center text-center">
              <p className="body-2 text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                The selected, leading papers of the AIMDA 2026 conference will be published by Springer Nature in an e-proceeding. The approximate publication time is May 2026. All other accepted papers will be published in a special volume of proceedings with an international standard book number (ISSN).<br /><br />
                The Abstracts e-book will be made available on the day of the conference.<br /><br />
                The AIMDA Proceedings will be published in April 2026.
              </p>
              <a
                href="#call-for-papers"
                className="inline-flex items-center justify-center h-11 px-8 mt-2 rounded-xl font-bold text-base uppercase tracking-wider bg-gradient-to-br from-[#232b4e] to-[#1a1a32] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-80"
                style={{
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                See Submission Guidelines
              </a>
            </div>
          </div>
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
