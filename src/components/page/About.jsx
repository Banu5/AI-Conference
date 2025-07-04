import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Header from "../Header";
import MouseGradient from "../MouseGradient";
import ModernFooter from "../ModernFooter";
import OrganizingCommittee from "../OrganizingCommittee";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4 } from "../../assets";

const aboutSections = [
	{
		img: "/head.png", // Place your image in public/about1.jpg
		alt: "AIMDA Conference",
		text: "AIMDA 2026 (Artificial Intelligence for Multidisciplinary Development and Advancement) is an international conference dedicated to exploring the transformative impact of Artificial Intelligence (AI) across diverse sectors and disciplines. As AI continues to redefine the boundaries of innovation and societal progress, this landmark event will serve as a premier platform for knowledge exchange, collaboration, and strategic dialogue among academia, industry, and policy leaders.",
		imgLeft: true,
	},
	{
		img: "/sir.jpg", // Place your image in public/about2.jpg
		alt: "AI Collaboration",
		text: "Organized by Multidisciplinary AI Research Centre (MARC) of the University of Peradeniya and gapHQ, AIMDA 2026 is hosted at gapHQ in Colombo, Sri Lanka, positioning South Asia & South East Asia at the forefront of global AI discourse. The conference will feature cutting-edge research presentations, keynote speeches from renowned global experts, interactive panel discussions, and workshops focused on real-world AI applications in healthcare, engineering, sustainability, education, the arts, governance, and beyond.",
		imgLeft: false,
	},
];

const topics = [
	{ number: "01", title: "AI in Education" },
	{ number: "02", title: "AI in Healthcare and Medicine" },
	{ number: "03", title: "AI in Climate Change" },
	{ number: "04", title: "AI in Agriculture and Food Science" },
	{ number: "05", title: "AI in Management and Policy" },
	{ number: "06", title: "AI in Engineering" },
];

const committee = [
	{
		name: "Prof. Janka Ekanayake",
		title: "Senior Professor, University of Peradeniya - Conference Co-Chair",
		img: "/committee/janka.jpg",
	},
	{
		name: "Prof. Roshan G. Ragel",
		title: "Professor, University of Peradeniya - Conference Co-Chair",
		img: "/committee/roshan.jpg",
	},
	{
		name: "Prof. Lashith Gunawardena",
		title: "Professor, University of Sri Jayewardenepura - Conference Co-Chair",
		img: "/committee/lashith.jpg",
	},
	{
		name: "Dr. Chinthaka Premachandra",
		title: "Professor, Nagoya University - Conference Co-Chair",
		img: "/committee/chinthaka.jpg",
	},
	{
		name: "Prof. Lashith Gunawardena",
		title: "Professor, University of Sri Jayewardenepura - Conference Co-Chair",
		img: "/committee/lashith.jpg",
	},
	{
		name: "Dr. Chinthaka Premachandra",
		title: "Professor, Nagoya University - Conference Co-Chair",
		img: "/committee/chinthaka.jpg",
	},
];

const About = () => {
	const sectionRefs = useRef([]);
	const svgLineRef = useRef(null);
	const titleRef = useRef(null);
	const cardRefs = useRef([]);

	useEffect(() => {
		// GSAP for sections
		sectionRefs.current.forEach((el, idx) => {
			if (!el) return;
			gsap.fromTo(
				el,
				{ opacity: 0, y: 80 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						end: "top 60%",
						scrub: 0.5,
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		// GSAP for SVG line draw
		if (svgLineRef.current) {
			const length = svgLineRef.current.getTotalLength();
			svgLineRef.current.style.strokeDasharray = length;
			svgLineRef.current.style.strokeDashoffset = length;
			gsap.to(svgLineRef.current, {
				strokeDashoffset: 0,
				ease: "power2.out",
				scrollTrigger: {
					trigger: svgLineRef.current,
					start: "top 70%",
					end: "bottom 10%", // extend the end further down
					scrub: 10, // much slower
				},
			});
		}

		// Title scroll animation
		if (titleRef.current) {
			gsap.fromTo(
				titleRef.current,
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: titleRef.current,
						start: "top 90%",
						end: "top 70%",
						toggleActions: "play none none reverse",
					},
				}
			);
		}

		// Cards scroll animation
		cardRefs.current.forEach((card, idx) => {
			if (!card) return;
			gsap.fromTo(
				card,
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					delay: idx * 0.08,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card,
						start: "top 95%",
						end: "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		// Glow animation for topics boxes (thin, slow, charming)
		if (cardRefs.current.length) {
			const glow = gsap.timeline({ repeat: -1, defaults: { duration: 0.7, ease: "power2.inOut" } });
			cardRefs.current.forEach((ref, i) => {
				glow.to(
					ref,
					{
						boxShadow: "0 0 8px 2px #7f9cf5, 0 0 0 0 #fff0",
						borderColor: "#7f9cf5",
						scale: 1.04,
					},
					i * 0.5 // slower, each box glows after the previous
				).to(
					ref,
					{
						boxShadow: "0 0 0 0 #7f9cf5, 0 0 0 0 #fff0",
						borderColor: "#7f9cf5",
						scale: 1,
					},
					i * 0.5 + 0.5
				);
			});
		}
	}, []);

	return (
		<div className="relative min-h-screen bg-black">
			<MouseGradient />

			{/* Video Hero Section with Title Overlay */}
			<div className="w-full h-screen relative">
				<video
					className="w-full h-full object-cover"
					src="/abt2.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="absolute inset-0 flex flex-col items-end justify-center pr-12 mr-15">
					<div ref={titleRef} className="text-right select-none">
						<span
							className="block text-white text-6xl md:text-8xl font-extrabold leading-none drop-shadow-lg"
							style={{ letterSpacing: "-0.04em" }}
							id="about-main"
						>
							About
						</span>
						<span
							className="block text-[#7f9cf5] text-3xl md:text-5xl font-extrabold tracking-tight mt-2"
							id="about-sub"
						>
							AIMDA 2026
						</span>
					</div>
				</div>
			</div>

			{/* SVG animated line in background, starts after video */}
			<div className="relative w-full h-[1200px] -mt-24 z-0 pointer-events-none">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 1200 1200"
					fill="none"
					className="absolute left-0 top-0 w-full h-full"
				>
					<path
						ref={svgLineRef}
						d="
            M200 100 
            Q400 300 600 200 
            Q900 100 1000 400 
            Q1100 700 800 800 
            Q500 900 700 1100 
            Q900 1300 1100 1000
          "
						stroke="#7f9cf5"
						strokeWidth="18"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
						style={{
							filter: "drop-shadow(0 0 24px #7f9cf5cc)",
							opacity: 0.25,
						}}
					/>
				</svg>
			</div>

			{/* Overlay for content */}
			<div className="relative z-10 flex flex-col min-h-screen -mt-[1200px] pt-24">
				<Header />
				<main className="flex-1 w-full pt-10" id="about-svg-anim">
					{/* Alternating sections */}
					<div className="relative flex flex-col gap-24 max-w-6xl mx-auto px-4 sm:px-6">
						{aboutSections.map((sec, idx) => (
							<div
								key={idx}
								ref={(el) => (sectionRefs.current[idx] = el)}
								className={`flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 ${
									sec.imgLeft ? "md:flex-row" : "md:flex-row-reverse"
								}`}
							>
								<div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
									<img
										src={sec.img}
										alt={sec.alt}
										className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-md object-cover"
										style={{ minHeight: 200, maxHeight: 350 }}
									/>
								</div>
								<div className="w-full md:w-1/2 flex justify-center">
									<p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl mx-auto text-justify">
										{sec.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</main>
				
				{/* MARC Section */}
				<div
					className="relative w-full min-h-[60vh] flex items-center justify-center my-16 sm:my-24 px-4"
					style={{
						backgroundImage: "url('/bg3.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="absolute inset-0 bg-black/70"></div>
					<div className="relative z-10 max-w-3xl mx-auto px-4 py-10 sm:py-16 text-center flex flex-col items-center">
						<h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-anta text-[#7f9cf5] mb-6" style={{ fontFamily: "'Anta', sans-serif" }}>
							Multidisciplinary AI Research Centre - MARC
						</h2>
						<p className="text-white/90 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-justify">
							The Multidisciplinary AI Research Centre (MARC) at the University of Peradeniya is a pioneering national initiative dedicated to advancing Artificial Intelligence (AI) research and innovation across disciplines. Positioned at the intersection of technology, science, and society, MARC brings together experts from Engineering, Science, Agriculture, Medicine, Humanities, and Management to collaboratively address complex challenges and contribute to sustainable national development.<br /><br />
							Established with the goal of positioning Sri Lanka at the forefront of the Fourth and Fifth Industrial Revolutions (IR4.0 and IR5.0), MARC serves as a catalyst for transformative, inclusive, and responsible AI innovation. The Centre is committed to producing cutting-edge AI solutions with real-world impact—ranging from healthcare and climate resilience to education, agriculture, and governance.<br /><br />
							Through interdisciplinary research, capacity building, policy engagement, and outreach, MARC plays a key role in the University of Peradeniya’s mission to drive technological progress and prepare the nation for a future powered by AI. The Centre envisions a more inclusive, equitable, and sustainable world where AI is a tool for collective advancement.
						</p>
					</div>
				</div>

				{/* Topics Section */}
				<div className="w-full py-16 flex flex-col items-center">
					<h2
						className="text-3xl md:text-5xl font-extrabold text-[#7f9cf5] mb-10 text-center"
					>
						AIMDA 2026 Topics
					</h2>
					<div className="grid grid-cols-3 grid-rows-2 gap-8 w-full max-w-4xl">
						{topics.map((topic, idx) => (
							<div
								key={idx}
								ref={el => (cardRefs.current[idx] = el)}
								className="flex flex-col justify-center items-center rounded-2xl border-2 border-[#7f9cf5] bg-white/10 backdrop-blur-md shadow-none transition-all duration-300"
								style={{
									minHeight: "140px",
									fontWeight: 500,
									fontSize: "1.25rem",
								}}
							>
								<span className="text-[#7f9cf5] text-lg font-semibold mb-1">{topic.number}</span>
								<span className="text-white text-base font-medium text-center">{topic.title}</span>
							</div>
						))}
					</div>
				</div>

				{/* Organizing Committee Section with Video Background */}
				<OrganizingCommittee />

			</div>
		</div>
	);
};

export default About;