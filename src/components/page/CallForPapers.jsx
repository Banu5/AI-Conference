import React from "react";
import Header from "../Header";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitImage2 } from "../../assets";
import ClipPath from "../../assets/svg/ClipPath";
import { GradientLight } from "../design/Benefits";

const downloadBoxes = [
  {
    id: "abstract",
    title: "Download Abstract Template",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    light: false,
    link: "/downloads/abstract-template.docx",
  },
  {
    id: "fullpaper",
    title: "Download Full Paper Template",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
    link: "/downloads/full-paper-template.docx",
  },
  {
    id: "presentation",
    title: "Download Presentation Template",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    light: false,
    link: "/downloads/presentation-template.pptx",
  },
];

const CallForPapers = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Navigation Bar */}
      <Header />

      {/* Fixed Background (no blur, no zoom, only covers viewport) */}
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
      <div className="fixed inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg mb-6 tracking-tight"
          style={{ fontFamily: "'Anta', sans-serif" }}
        >
          Call for Papers
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#7f9cf5] text-center mb-10 tracking-tight" style={{ fontFamily: "'Anta', sans-serif" }}>
          Submission Guidelines
        </h2>
        <p className="text-white/90 text-lg md:text-xl text-center mb-10 leading-relaxed font-light max-w-4xl w-full mx-auto text-justify">
          Abstracts and Full Paper should be submitted through Google Forms (You can access the Google Form through the website and click the button provided below this page).<br /><br />
          All submitted abstracts will be reviewed by the scientific committee of AIMDA 2026 and all accepted Full papers must be presented in the Oral Sessions of AIMDA 2026. Abstracts only submissions will be published in the Abstract Book of AIMDA 2026. Only presented Full Papers will be published in the conference proceedings with ISSN and selected, and leading papers of the AIMDA 2026 conference will be published by Springer Nature in an e-proceedings.<br /><br />
          All Full Paper must be submitted electronically. We do not accept submissions fax.<br /><br />
          All Full Paper must be written and submitted in English.<br /><br />
          Please follow the Google Form guidelines and fill them accordingly.<br /><br />
          Please include the information of all the authors in the “author information” section of the submission boxes. We will not accept the inclusion of additional authors and changes after the Full Paper submission deadline. Please tick the corresponding author of each submission.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4 tracking-tight" style={{ fontFamily: "'Anta', sans-serif" }}>
          Full Paper Formatting Guidelines
        </h3>
        <p className="text-white/90 text-base md:text-lg text-center mb-10 leading-relaxed font-light max-w-4xl w-full mx-auto text-justify">
          The full paper should not be more than 15 pages in length. Manuscripts should be submitted in Microsoft Word format (*.docx). Page sizes should be A4 & use Normal format for margin. The paper should follow the formatting guidelines strictly. The easiest way to achieve this is to use the provided template and change the text inside to reflect your paper content. Alternatively, format guidelines are given below, should you prefer to format the paper from scratch.
        </p>

        {/* Download Boxes - 3 in a row, small, only topic, centered, no icon */}
        <div className="flex flex-row gap-12 mb-10 w-full justify-center relative z-10">
          {downloadBoxes.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-[230px] h-[150px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <a
                href={item.link}
                download
                className="relative z-2 flex flex-col items-center justify-center w-full h-full pointer-events-auto
          rounded-2xl
          bg-white/10
          backdrop-blur-md
          shadow-xl
          transition-all duration-300
          hover:bg-white/20
          hover:scale-105"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-white text-center font-bold text-lg md:text-xl px-2"
                  style={{ fontFamily: "'Anta', sans-serif" }}
                >
                  {item.title}
                </span>
              </a>
              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>

        {/* Small font instructions */}
        <div className="text-white/80 text-xs md:text-sm text-center mt-6 leading-relaxed font-light max-w-3xl w-full mx-auto">
          All the instructions regarding the camera ready paper should be same as the full paper format guidelines. Here Author details should be included.<br /><br />
          Please note that the Technical Assessment Committees for AIMDA 2026 and “Springer Nature” are separate and that the word of the Committee regarding the selection of papers for publication at “Springer Nature” is final. Plagiarism and other errors are checked using iThenticate check at “Springer Nature”.<br /><br />
          <span className="font-semibold text-[#7f9cf5]">Note:</span> If you encounter any problems at any point in the Full Paper submission process, please email: <a href="mailto:resourcecenter@gaphq.lk" className="underline hover:text-[#fff]">resourcecenter@gaphq.lk</a>
        </div>
      </div>
      
    </div>
  );
};

export default CallForPapers;