import { curve, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import HeroVideo from "./HeroVideo";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-0 -mt-[0.25rem]"
      crosses
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <HeroVideo />
        
        <div className="relative z-10 flex flex-col justify-center min-h-screen pt-[9rem]">
          <div className="main-hero-title max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              International Conference on    {` `}
              <span className="inline-block relative">
                 AI in 2026{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                /> 
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              The Future is Multidisciplinary: AI as a Unifying Force for Global Progress
                        </p>
            <Button href="/pricing" white>
              Get started
            </Button>
          </div>

          <div className="relative z-10 max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <video
                    className="w-full h-full object-cover"
                    src="/abtvid.mp4" // Use your video file here
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/robot.jpg" // Optional: fallback image before video loads
                  />
                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Code generation"
                    />
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
            </div>

            <BackgroundCircles />
          </div>

        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
