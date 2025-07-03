import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitImage2 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefitsContent = [
	{
		id: "cfp",
		title: "Call for Papers",
		text: (
			<>
				Discover cutting-edge themes from Intelligent Systems to AI in Education,
				Digital Health to Climate Tech, and more! <br />
				<strong>Abstract and Full Paper Submission Deadline: 15th August 2025</strong>
			</>
		),
		iconUrl: benefitIcon1,
		imageUrl: benefitImage2,
		backgroundUrl: "./src/assets/benefits/card-1.svg",
		light: false,
		link: "#call-for-papers",
	},
	{
		id: "registration",
		title: "Early bird registration",
		text: (
			<>
				Be part of the future of AI-driven innovation! Unlock exclusive benefits with
				our Early Bird Registration for AIMDA 2026 - now open for a limited time.
			</>
		),
		iconUrl: benefitIcon2,
		imageUrl: benefitImage2,
		backgroundUrl: "./src/assets/benefits/card-2.svg",
		light: true,
		link: "#registration",
	},
	{
		id: "webinar",
		title: "AIMDA Webinar Series",
		text: (
			<>
				Explore the transformative power of Artificial Intelligence and gain insights
				from global experts across disciplines. Join us for an inspiring journey
				through our FREE Webinar Series on AI for Multidisciplinary Impact.
			</>
		),
		iconUrl: benefitIcon3,
		imageUrl: benefitImage2,
		backgroundUrl: "./src/assets/benefits/card-3.svg",
		light: false,
		link: "#webinar-series",
	},
];

const Benefits = () => {
	const bgRef = useRef(null);
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!bgRef.current || !sectionRef.current) return;
		gsap.to(bgRef.current, {
			y: -300, // Move faster and more pronounced
			ease: "none",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	}, []);

	return (
		<Section id="features" ref={sectionRef}>
			{/* Parallax Background covers the whole section */}
			<div
				ref={bgRef}
				className="pointer-events-none absolute inset-0 w-full h-full z-0"
				style={{
					backgroundImage: "url('/bg.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.18,
				}}
			/>
			<div className="container relative z-2">
				<Heading
					className="md:max-w-md lg:max-w-2xl font-anta"
					title="Engage with AIMDA 2026:  Call for Papers, Registration & Webinars"
					style={{ fontFamily: "'Anta', sans-serif" }}
				/>

				<div className="flex flex-wrap gap-10 mb-10 relative z-10">
					{benefitsContent.map((item) => (
						<div
							className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[25rem] w-full"
							style={{
								backgroundImage: `url(${item.backgroundUrl})`,
							}}
							key={item.id}
						>
							<div className="relative z-2 flex flex-col min-h-[26rem] p-[2.4rem] pointer-events-none justify-center">
								<h5 className="h5 mb-5 text-center">{item.title}</h5>
								<div className="flex-1 flex flex-col justify-center">
									<p className="body-2 mb-6 text-n-3 text-center">
										{item.text}
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
										href={item.link}
										className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center gap-2 hover:text-color-1 transition-colors"
									>
										See More
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

export default Benefits;
