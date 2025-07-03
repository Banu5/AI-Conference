import React from "react";

// Example brand images (replace with your own)
const brands = [
  { name: "BrandOne", img: "/logo1.png" },
  { name: "BrandTwo", img: "/logo2.png" },
  { name: "BrandThree", img: "/logo3.png" },
];

// Helper to create repeated sets with gap after each set
const setsToShow = 4; // Increase for smoother infinite loop
const brandSets = Array(setsToShow)
  .fill(0)
  .flatMap((_, i) => [
    ...brands.map((brand, idx) => ({
      ...brand,
      key: `set${i}-brand${idx}`,
    })),
    { isGap: true, key: `gap${i}` },
  ]);

const Collab = () => (
  <section
    className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden"
    style={{
      minHeight: 480,
    }}
  >
    {/* Centered background image */}
    <img
      src="/gradient.png"
      alt="Gradient"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[900px] max-w-none opacity-80"
      style={{ objectFit: "contain" }}
    />
    {/* Overlay Content */}
    <div className="relative z-10 w-full flex flex-col items-center">
      {/* Headline */}
      <div className="mb-6 mt-2 text-center">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-2"
          style={{
            color: "#181c28", // dark blue, almost black
            fontFamily: "'Anta', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Collaboration
        </h2>
        <div
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "#e0e0e0", fontFamily: "'Anta', sans-serif" }}
        >
          Into brands
        </div>
      </div>

      {/* Brands Row */}
      <div className="relative w-full flex items-center justify-center mt-12 mb-2">
        {/* Left blur */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-24 z-30 pointer-events-none rounded-xl"
          style={{
            background: "linear-gradient(to right, #181c28 0%, transparent 100%)",
            filter: "blur(24px)",
            opacity: 0.7,
          }}
        />
        {/* Right blur */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-24 z-30 pointer-events-none rounded-xl"
          style={{
            background: "linear-gradient(to left, #181c28 0%, transparent 100%)",
            filter: "blur(24px)",
            opacity: 0.7,
          }}
        />
        {/* Removed blue glow under brands */}
        {/* Looping Brands */}
        <div className="relative flex flex-row items-center px-32 py-4 z-20 animate-scroll-x whitespace-nowrap">
          {brandSets.map((item) =>
            item.isGap ? (
              <div
                key={item.key}
                className="inline-block"
                style={{ width: 64 }}
                aria-hidden="true"
              />
            ) : (
              <div
                key={item.key}
                className="inline-flex flex-col items-center p-4 mx-4"
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "2rem",
                  position: "relative",
                }}
              >
                {/* Gradient border using a pseudo-element */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "2rem",
                    padding: 2,
                    background: "linear-gradient(135deg, #3399ff, #a855f7, #f472b6)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    zIndex: 1,
                  }}
                />
                {/* Inner dark background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 2,
                    borderRadius: "1.8rem",
                    background: "linear-gradient(135deg, #181c28 60%, #232946 100%)",
                    zIndex: 2,
                  }}
                />
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-28 w-auto object-contain mb-2"
                  style={{
                    filter: "drop-shadow(0 2px 12px #3399ff44)",
                    position: "relative",
                    zIndex: 3,
                  }}
                />
              </div>
            )
          )}
        </div>
        {/* Animation style */}
        <style>
          {`
            @keyframes scroll-x {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${100 / setsToShow}%); }
            }
            .animate-scroll-x {
              animation: scroll-x 32s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  </section>
);

export default Collab;