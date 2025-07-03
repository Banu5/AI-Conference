import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex relative">
        {/* Countdown absolutely at the very top right */}
        <div className="absolute top-0 right-0 mt-2 mr-2 z-30">
          <Countdown />
        </div>

        <div className="max-w-[35rem]">
          <h2
            className="h1 mb-4 md:mb-28 -mt-20 font-anta"
            style={{ fontFamily: "'Anta', sans-serif" }}
          >
            Welcome to AIMDA 
          </h2>

          <ul className="max-w-[35rem] mb-10 md:mb-14">
            <li className="mb-3 py-3 flex items-start">
              <img src={check} width={24} height={24} alt="check" className="mt-1" />
              <p className="ml-5 text-lg md:text-xl font-normal text-white/90 leading-relaxed">
                AIMDA 2026 is an international conference organized by the Multidisciplinary AI Research Centre (MARC) of the University of Peradeniya and gapHQ, dedicated to showcasing the transformative role of Artificial Intelligence across diverse sectors. Hosted by gapHQ, Colombo, the conference brings together global experts from academia, industry, and policy to explore real-world AI applications and foster responsible, multidisciplinary innovation for global impact.
              </p>
            </li>
          </ul>

          <Link to="/about">
            <Button>About us</Button>
          </Link>
        </div>

        {/* Right side: Larger video, more to right and bottom, with visible curves */}
        <div className="relative lg:ml-auto xl:w-[50rem] mt-4 flex items-end justify-center min-h-[26rem]">
          <LeftCurve />
          <RightCurve />
          <div className="absolute right-[-2rem] bottom-[-6rem] w-[46rem] aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-n-6 bg-n-8 flex items-center justify-center z-10">
            <video
              className="w-full h-full object-cover"
              src="/abtvid.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
