import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroVideo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Fade out when the main title scrolls up
    const title = document.querySelector('.main-hero-title');
    if (title && containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: title,
          start: "top top", // when title hits top of viewport
          end: "bottom top", // when title leaves viewport
          scrub: true,
        }
      });
    }

    // Move up on scroll (your previous animation)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600",
        scrub: 1,
      }
    });

    tl.to(containerRef.current, {
      y: "-40vh",
      ease: "power1.out",
      duration: 1,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none"
      style={{ margin: 0, padding: 0, zIndex: 0 }}
    >
      
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/aibg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-n-8/70 " />
    </div>
  );
};

export default HeroVideo;