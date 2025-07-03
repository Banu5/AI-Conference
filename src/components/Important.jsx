import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const importantContent = [
  {
    id: "box1",
    title: "Abstract/ Full Paper Submission",
    date: "15th August 2025",
    button: {
      text: "See More",
      link: "#call-for-papers",
    },
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    light: false,
  },
  {
    id: "box2",
    title: "Camera-ready Paper Submission",
    date: "30th November 2025",
    button: {
      text: "See More",
      link: "#call-for-papers",
    },
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "box3",
    title: "Early Bird Registration Starting",
    date: "15th December 2025",
    button: {
      text: "See More",
      link: "#registrations",
    },
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    light: false,
  },
  {
    id: "box4",
    title: "Conference Dates",
    date: "13th, 14th and 15th February 2026",
    button: {
      text: "See More",
      link: "#about-conference",
    },
    iconUrl: benefitIcon4 || benefitIcon1,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    light: false,
  },
];

const Important = () => {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!bgRef.current || !sectionRef.current) return;
    gsap.to(bgRef.current, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: idx < 2 ? -120 : 120,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <Section id="important" ref={sectionRef}>
      {/* Parallax Background covers the whole section */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-anta"
          title="Important dates"
          style={{ fontFamily: "'Anta', sans-serif" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10 relative z-10">
          {importantContent.map((item, idx) => (
            <div
              ref={el => (cardRefs.current[idx] = el)}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.8rem] pointer-events-none justify-center">
                <div className="flex flex-col items-center justify-center h-full">
                  <h5 className="h5 mb-4 text-center">{item.title}</h5>
                  <p className="body-2 mb-6 text-center flex items-center justify-center min-h-[2.5rem]">
                    <span className="text-red-500 font-bold text-lg">{item.date}</span>
                  </p>
                </div>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a
                    href={item.button.link}
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center gap-2 hover:text-color-1 transition-colors"
                  >
                    {item.button.text}
                    <Arrow />
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Important;