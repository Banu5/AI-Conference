import React, { useEffect, useRef } from "react";
import Header from "../Header";
import MouseGradient from "../MouseGradient";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tables = [
    {
        title: "Registration Fees – Local (Physical)",
        rows: [
            ["Full Registration", "LKR 15,000", "LKR 20,000"],
            ["Students (Undergraduate – Local Universities) (Day registration only)", "LKR 5,000", "LKR 5,000"],
            ["Students (Postgraduate – Local Universities) (Day registration only)", "LKR 10,000", "LKR 12,500"],
            ["Accompanying Person/Participants (Day registration only)", "LKR 10,000", "LKR 10,000"],
        ],
    },
    {
        title: "Registration Fees – Local (Online)",
        rows: [
            ["Full Registration", "LKR 12,000", "LKR 14,500"],
            ["Students (Undergraduate – Local Universities)", "LKR 5,000", "LKR 5,000"],
            ["Students (Postgraduate – Local Universities)", "LKR 7,000", "LKR 9,500"],
            ["Accompanying Person/Participants", "FREE", "FREE"],
        ],
    },
    {
        title: "Registration Fees – Foreign (Physical)",
        rows: [
            ["Full Registration", "USD 500", "USD 550"],
            ["Student Registration", "USD 350", "USD 400"],
            ["Participant", "USD 350", "USD 400"],
        ],
    },
    {
        title: "Registration Fees – Foreign (Online)",
        rows: [
            ["Full Registration", "USD 100", "USD 150"],
            ["Student Registration", "USD 75", "USD 100"],
        ],
    },
];

const Price = () => {
    const tableRefs = useRef([]);
    const paymentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        tableRefs.current.forEach((el, idx) => {
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
                        toggleActions: "play reverse play reverse", // Animation plays on enter and reverses on leave
                    },
                    delay: idx * 0.15,
                }
            );
        });
        if (paymentRef.current) {
            gsap.fromTo(
                paymentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: paymentRef.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse", // Animation plays on enter and reverses on leave
                    },
                }
            );
        }
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <Header />
            <MouseGradient />

            {/* Fixed, non-moving background */}
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
            <div className="fixed inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-24 flex flex-col items-center min-h-screen">
                <h1
                    className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg mb-12 tracking-tight"
                    style={{ fontFamily: "'Anta', sans-serif" }}
                >
                    Registration Fees
                </h1>
                <div className="w-full flex flex-col gap-16">
                    {tables.map((table, idx) => (
                        <div
                            key={table.title}
                            ref={el => (tableRefs.current[idx] = el)}
                            className="w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-xl px-2 md:px-8 py-8 border border-[#7f9cf5]/30"
                        >
                            <h2
                                className="text-2xl md:text-3xl font-extrabold text-[#7f9cf5] text-center mb-6"
                                style={{ fontFamily: "'Anta', sans-serif" }}
                            >
                                {table.title}
                            </h2>
                            <table className="w-full text-sm sm:text-base md:text-xl text-white border-separate border-spacing-0">
                                <thead>
                                    <tr>
                                        <th className="py-2 sm:py-3 text-left font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>
                                            Registration Category
                                        </th>
                                        <th className="py-2 sm:py-3 text-left font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>
                                            Before 1st Feb 2026
                                        </th>
                                        <th className="py-2 sm:py-3 text-left font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>
                                            After 1st Feb 2026
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table.rows.map((row, i) => (
                                        <React.Fragment key={i}>
                                            <tr>
                                                {row.map((cell, j) => (
                                                    <td key={j} className="py-2 sm:py-4 px-1 sm:px-2 font-medium break-words">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>
                                                    <hr className="border-t border-[#7f9cf5]/40 my-0" />
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
            {/* Payment Methods Section */}
            <div
                ref={paymentRef}
                className="relative z-10 w-full max-w-5xl mx-auto mt-24 mb-1"
            >
                <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-[#7f9cf5]/30 overflow-hidden">
                    {/* Left Side: Title & Features */}
                    <div className="flex-1 p-10 flex flex-col justify-start">
                        <h2
                            className="text-4xl md:text-6xl font-extrabold text-white mb-8 text-left leading-tight"
                            style={{ fontFamily: "'Anta', sans-serif" }}
                        >
                            Payment<br />Methods
                        </h2>
                        <ul className="space-y-5 mt-4">
                            {[
                                "Cash ",
                                "Bank draft payable in Sri Lanka",
                                "Credit card ",
	
                                "Cheques",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-300 text-lg font-medium">
                                    {/* Sparkle/Star Icon (Heroicons Sparkles) */}
                                    <svg className="w-5 h-5 mr-3 text-[#7f9cf5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
									</svg>
									{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Side: Payment Methods Grid */}
                    <div className="flex-1 p-4 sm:p-8 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-xs">
                            {/* Cash */}
                            <div className="flex flex-col items-center justify-center bg-white/20 rounded-2xl shadow-md border border-[#7f9cf5]/20 p-3 sm:p-6">
                                <svg className="w-10 h-10 sm:w-20 sm:h-20 mb-2 text-[#7f9cf5]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<rect x="3" y="7" width="18" height="10" rx="2" fill="#7f9cf5" fillOpacity="0.15"/>
									<rect x="3" y="7" width="18" height="10" rx="2" stroke="#7f9cf5" strokeWidth="1.5"/>
									<circle cx="12" cy="12" r="2.5" stroke="#7f9cf5" strokeWidth="1.5"/>
								</svg>
                                <span className="text-white font-semibold text-xs sm:text-base mt-1 text-center">Cash</span>
                            </div>
                            {/* Bank Draft */}
                            <div className="flex flex-col items-center justify-center bg-white/20 rounded-2xl shadow-md border border-[#7f9cf5]/20 p-3 sm:p-6">
                                <svg className="w-10 h-10 sm:w-20 sm:h-20 mb-2 text-[#7f9cf5]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<rect x="5" y="10" width="14" height="7" rx="2" fill="#7f9cf5" fillOpacity="0.15"/>
									<rect x="5" y="10" width="14" height="7" rx="2" stroke="#7f9cf5" strokeWidth="1.5"/>
									<path d="M12 10V7M9 7h6" stroke="#7f9cf5" strokeWidth="1.5" strokeLinecap="round"/>
								</svg>
                                <span className="text-white font-semibold text-xs sm:text-base mt-1 text-center">Bank Draft (Sri Lanka)</span>
                            </div>
                            {/* Credit Card */}
                            <div className="flex flex-col items-center justify-center bg-white/20 rounded-2xl shadow-md border border-[#7f9cf5]/20 p-3 sm:p-6">
                                <svg className="w-10 h-10 sm:w-20 sm:h-20 mb-2 text-[#7f9cf5]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<rect x="3" y="7" width="18" height="10" rx="2" fill="#7f9cf5" fillOpacity="0.15"/>
									<rect x="3" y="7" width="18" height="10" rx="2" stroke="#7f9cf5" strokeWidth="1.5"/>
									<rect x="7" y="15" width="4" height="2" rx="1" fill="#7f9cf5" />
								</svg>
                                <span className="text-white font-semibold text-xs sm:text-base mt-1 text-center">Credit Card</span>
                            </div>
                            {/* Cheques */}
                            <div className="flex flex-col items-center justify-center bg-white/20 rounded-2xl shadow-md border border-[#7f9cf5]/20 p-3 sm:p-6">
                                <svg className="w-10 h-10 sm:w-20 sm:h-20 mb-2 text-[#7f9cf5]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<rect x="4" y="8" width="16" height="8" rx="2" fill="#7f9cf5" fillOpacity="0.15"/>
									<rect x="4" y="8" width="16" height="8" rx="2" stroke="#7f9cf5" strokeWidth="1.5"/>
									<path d="M8 12h8M8 14h4" stroke="#7f9cf5" strokeWidth="1.5" strokeLinecap="round"/>
								</svg>
                                <span className="text-white font-semibold text-xs sm:text-base mt-1 text-center">Cheques</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Payment Methods */}
            {/* Account Informations Section */}
            <div className="w-full mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-left">
                    Account Informations
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    {/* Box 1 */}
                    <div className="flex-1 bg-white/20 border border-[#7f9cf5]/30 rounded-2xl p-6 shadow-md min-w-0 w-full">
                        <div className="text-white text-base md:text-lg font-semibold mb-2">Account No: <span className="font-normal">057-1001-3001-5231</span></div>
                        <div className="text-white text-base md:text-lg font-semibold mb-2">Account Name: <span className="font-normal">ICSBE</span></div>
                        <div className="text-white text-base md:text-lg font-semibold mb-2">Bank: <span className="font-normal">People's Bank, Peradeniya</span></div>
                        <div className="text-white text-base md:text-lg font-semibold">Swift Code: <span className="font-normal">PSBKLKLX</span></div>
                    </div>
                    {/* Box 2 */}
                    <div className="flex-1 bg-white/20 border border-[#7f9cf5]/30 rounded-2xl p-6 shadow-md min-w-0 w-full">
                        <div className="text-white text-base md:text-lg font-semibold mb-2">Account No: <span className="font-normal">005160000194</span></div>
                        <div className="text-white text-base md:text-lg font-semibold mb-2">Account Name: <span className="font-normal">ICSBE</span></div>
                        <div className="text-white text-base md:text-lg font-semibold mb-2">Bank: <span className="font-normal">Sampath Bank, Peradeniya</span></div>
                        <div className="text-white text-base md:text-lg font-semibold">Swift Code: <span className="font-normal">BSAMLKLX</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;