import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const committee = [
  {
    name: "Prof. Janka Ekanayake",
    title: "Senior Professor, University of Peradeniya - Conference Co-Chair",
    img: "/aa3.jpg",
  },
  {
    name: "Prof. Roshan G. Ragel",
    title: "Professor, University of Peradeniya - Conference Co-Chair",
    img: "/aa3.jpg",
  },
  {
    name: "Prof. Lashith Gunawardena",
    title: "Professor, University of Sri Jayewardenepura - Conference Co-Chair",
    img: "/aa3.jpg",
  },
  {
    name: "Dr. Chinthaka Premachandra",
    title: "Professor, Nagoya University - Conference Co-Chair",
    img: "/aa3.jpg",
  },
  {
    name: "Prof. Lashith Gunawardena",
    title: "Professor, University of Sri Jayewardenepura - Conference Co-Chair",
    img: "/aa3.jpg",
  },
  {
    name: "Dr. Chinthaka Premachandra",
    title: "Professor, Nagoya University - Conference Co-Chair",
    img: "/aa3.jpg",
  },
];

// Dummy images for scientific committee (replace with real data as needed)
const scientificCommittee = [
  { img: "/aa3.jpg", name: "Member 1" },
  { img: "/aa3.jpg", name: "Member 2" },
  { img: "/aa3.jpg", name: "Member 3" },
  { img: "/aa3.jpg", name: "Member 4" },
  { img: "/aa3.jpg", name: "Member 5" },
  { img: "/aa3.jpg", name: "Member 6" },
  { img: "/aa3.jpg", name: "Member 7" },
  { img: "/aa3.jpg", name: "Member 8" },
  { img: "/aa3.jpg", name: "Member 9" },
];

const BOX_HEIGHT = 420;
const IMG_HEIGHT = 420; // Make image fill the box

const OrganizingCommittee = () => {
  const committeeRefs = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { y: -120 },
        {
          y: 220,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            pin: false,
          },
        }
      );
    }

    committeeRefs.current.forEach((el) => {
      if (!el) return;
      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.06) translateY(-8px)";
        el.style.boxShadow = "0 12px 36px 0 #7f9cf5cc";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1) translateY(0)";
        el.style.boxShadow = "0 4px 16px 0 #7f9cf522";
      });
    });
    return () => {
      committeeRefs.current.forEach((el) => {
        if (!el) return;
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ marginTop: 0, padding: 0 }}>
      {/* Parallax background image for this section only */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/face.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
          filter: "blur(18px)",
        }}
      />
      {/* Modern shade overlay: dark to transparent, bottom to top */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(24,28,40,0.92) 0%, rgba(24,28,40,0.7) 40%, rgba(24,28,40,0.2) 100%)"
        }}
      />
      {/* Section content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-0 pt-16 pb-0">
        <h2
          className="text-white text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg mb-2"
          style={{ fontFamily: "'Anta', sans-serif" }}
        >
          Organizing Committee
        </h2>
        <h3
          className="text-[#7f9cf5] text-2xl md:text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Anta', sans-serif" }}
        >
          The AI Conference Co-Chairs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16 px-2">
          {committee.map((person, idx) => (
            <div
              key={person.name + idx}
              ref={el => (committeeRefs.current[idx] = el)}
              className="group relative flex items-end bg-[#181c28]/80 border-2 border-black rounded-2xl overflow-hidden transition-all duration-300 w-full max-w-xs mx-auto aspect-[3/4]"
            >
              <img
                src={person.img}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "center",
                  zIndex: 0,
                }}
              />
              {/* Shade overlay on image */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(24,28,40,0.92) 0%, rgba(24,28,40,0.6) 60%, rgba(24,28,40,0.1) 100%)",
                  zIndex: 1,
                }}
              />
              {/* Text on image, always at bottom */}
              <div className="relative z-10 w-full p-3 flex flex-col items-center justify-end">
                <div className="text-white text-base sm:text-lg font-bold text-center" style={{ fontFamily: "'Anta', sans-serif" }}>{person.name}</div>
                <div className="text-[#7f9cf5] text-xs sm:text-sm text-center mt-2" style={{ fontFamily: "'Anta', sans-serif" }}>{person.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Committee Section */}
        <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg mb-8 mt-8" style={{ fontFamily: "'Anta', sans-serif" }}>
          Scientific Committee
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8 px-2">
          {scientificCommittee.map((member, idx) => (
            <div
              key={member.name + idx}
              className="relative flex items-end bg-[#181c28]/80 border-2 border-black rounded-2xl overflow-hidden w-full max-w-xs mx-auto aspect-[3/4] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "center",
                  zIndex: 0,
                }}
              />
              {/* Shade overlay on image */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(24,28,40,0.92) 0%, rgba(24,28,40,0.6) 60%, rgba(24,28,40,0.1) 100%)",
                  zIndex: 1,
                }}
              />
              {/* Text on image, always at bottom */}
              <div className="relative z-10 w-full p-3 flex flex-col items-center justify-end">
                <div className="text-white text-xs sm:text-base font-bold text-center" style={{ fontFamily: "'Anta', sans-serif" }}>{member.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;