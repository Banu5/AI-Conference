import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import Section from "./Section";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import image1 from "../assets/roadmap/image-1.png";
import image2 from "../assets/roadmap/image-2.png";
import image3 from "../assets/roadmap/image-3.png";
import image4 from "../assets/roadmap/image-4.png";

gsap.registerPlugin(ScrollTrigger);

const roadmap = [
	{
		id: "2",
		title: "Engineering, Technology & Infrastructure",
		text: "Covers intelligent systems, robotics, and automation; AI applications in smart infrastructure and sustainability; and machine learning across edge, cloud, and IoT technologies for building connected environments.",
		date: "2026",
		imageUrl: image2,
		colorful: true,
	},
	{
		id: "3",
		title: "Health, Agriculture & Environment",
		text: "Focuses on AI in life sciences and AgriTech, including precision farming and disease prediction; digital health and precision medicine; and AI-driven climate resilience and environmental monitoring.",
		date: "2026",
		imageUrl: image1,
	},
	{
		id: "4",
		title: "Humanities, Society & Education",
		text: "Explores AI for social good through ethics, equity, and policy; its role in arts, culture, and creative industries; and how AI transforms education via personalized learning and accessibility.",
		date: "2026",
		imageUrl: image4,
	},
	{
		id: "5",
		title: "Risk, Disaster & Resilience",
		text: "Highlights AI for emergency response and risk mitigation; its use in addressing global sustainability challenges; and enhancing resilience across communities and ecosystems.",
		date: "2026",
		imageUrl: image3,
	},
];

const Roadmap = () => {
	const cardsRef = useRef([]);
	const imagesRef = useRef([]);

	useEffect(() => {
		cardsRef.current.forEach((card) => {
			if (card) {
				gsap.fromTo(
					card,
					{ opacity: 0, y: 60, willChange: "transform, opacity" },
					{
						opacity: 1,
						y: 0,
						duration: 1,
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
			}
		});

		imagesRef.current.forEach((img) => {
			if (img) {
				gsap.fromTo(
					img,
					{ scale: 0.96, opacity: 0, willChange: "transform, opacity" },
					{
						scale: 1,
						opacity: 1,
						duration: 1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: img,
							start: "top 90%",
							end: "top 65%",
							scrub: 0.5,
							toggleActions: "play none none reverse",
						},
					}
				);
			}
		});
	}, []);

	return (
		<Section className="overflow-hidden" id="roadmap">
			<div className="container md:pb-10">
				<Heading
					title="Tracks & Themes"
					text="AIMDA 2026 presents a wide array of research tracks and themes designed to span multiple disciplines and domains:"
					className="font-anta"
					style={{ fontFamily: "'Anta', sans-serif" }}
				/>

				<div className="relative grid gap-4 md:grid-cols-2 md:gap-3 md:pb-[5rem]">
					{roadmap.map((item, idx) => (
						<div
							className="md:flex even:md:translate-y-[2.5rem] p-0.25 rounded-[2.5rem] bg-conic-gradient"
							key={item.id}
							ref={(el) => (cardsRef.current[idx] = el)}
							style={{ willChange: "transform, opacity" }}
						>
							<div className="relative p-4 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-6 min-w-[16rem] min-h-[18rem]">
								<div className="absolute top-0 left-0 max-w-full">
									<img
										className="w-full"
										src={grid}
										width={420}
										height={320}
										alt="Grid"
									/>
								</div>
								<div className="relative z-1">
									<div className="mb-4 -my-4 -mx-6">
										<img
											className="w-full"
											src={item.imageUrl}
											width={420}
											height={320}
											alt={item.title}
											ref={(el) => (imagesRef.current[idx] = el)}
											style={{ willChange: "transform, opacity" }}
										/>
									</div>
									<h4 className="h4 mb-2">{item.title}</h4>
									<p className="body-2 text-n-4">{item.text}</p>
								</div>
							</div>
						</div>
					))}

					<Gradient />
				</div>
			</div>
		</Section>
	);
};

export default Roadmap;
