import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socials } from "../constants"; // Make sure this import path is correct

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { title: "Home", url: "#hero" },
  { title: "About", url: "#about" },
  { title: "Committees", url: "#committees" },
  { title: "Call for Papers", url: "#call-for-papers" },
  { title: "Registration", url: "#registration" },
  { title: "Program", url: "#program" },
  { title: "More", url: "#more" },
];

const ModernFooter = () => {
  const curveRef = useRef(null);

  useEffect(() => {
    if (curveRef.current) {
      gsap.fromTo(
        curveRef.current,
        { attr: { d: "M0,0 Q50,0 100,0 T200,0 T400,0 T800,0 V100 H0 Z" } },
        {
          attr: {
            d: "M0,0 Q200,80 400,0 T800,0 V100 H0 Z"
          },
          scrollTrigger: {
            trigger: curveRef.current,
            start: "top bottom",
            end: "top 90%",
            scrub: 1,
          },
          ease: "power2.inOut",
          duration: 1.5,
        }
      );
    }
  }, []);

  return (
    <footer
      className="relative text-white pt-0 pb-10"
      style={{
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Fixed/still background image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/bubble.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />
      {/* Animated SVG curve */}
      
      {/* Footer Content */}
      <div className="relative z-30 container mx-auto px-6 pt-32 flex flex-col items-start gap-12">
        {/* Horizontal Row for all footer sections */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-16">
          {/* Logo */}
          <div className="mb-8 md:mb-0 flex-shrink-0 flex items-center justify-center">
            <img src="/icon.png" alt="Logo" className="w-48" />
          </div>
          {/* Quick Links */}
          <div className="mb-8 md:mb-0 min-w-[220px]">
            <h4
              className="text-2xl font-bold mb-4 tracking-wide"
              style={{ fontFamily: "'Anta', sans-serif" }}
            >
              Quick Links:
            </h4>
            <ul className="flex flex-col gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="hover:text-[#7f9cf5] transition-colors text-lg px-2 py-1 rounded-md hover:bg-[#3399ff22] duration-200"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Information + Socials */}
          <div className="mb-8 md:mb-0 min-w-[260px]">
            <h4
              className="text-2xl font-bold mb-4 tracking-wide"
              style={{ fontFamily: "'Anta', sans-serif" }}
            >
              Contact Information:
            </h4>
            <div className="mb-2 text-lg">Feel free to contact and reach us!</div>
            <div className="mb-2 text-lg">+94 77 152 2444</div>
            <div className="mb-4 text-lg">
              Email:{" "}
              <a
                href="mailto:resourcecenter@gaphq.lk"
                className="underline hover:text-[#7f9cf5] transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                resourcecenter@gaphq.lk
              </a>
            </div>
            {/* Social Media Icons */}
            <ul className="flex gap-5 flex-wrap mt-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#232946] rounded-full transition-all duration-200 hover:bg-[#3399ff] hover:scale-110 shadow-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <img src={item.iconUrl} width={24} height={24} alt={item.title} />
                </a>
              ))}
            </ul>
          </div>
          {/* Office Location */}
          <div className="min-w-[240px]">
            <h4
              className="text-2xl font-bold mb-4 tracking-wide"
              style={{ fontFamily: "'Anta', sans-serif" }}
            >
              Office Location:
            </h4>
            <p className="text-lg leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
              gapHQ, 120/10A, Vidya Mawatha,
              <br />
              Colombo 07, Sri Lanka.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-30 text-center text-base text-white/40 mt-16" style={{ fontFamily: "Poppins, sans-serif" }}>
        © {new Date().getFullYear()} AIMDA. All rights reserved.
      </div>
    </footer>
  );
};

export default ModernFooter;