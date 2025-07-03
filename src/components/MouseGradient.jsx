import { useEffect, useState } from 'react';

const MouseGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(600px at ${position.x}px ${position.y}px, 
            rgba(139, 92, 246, 0.3), 
            rgba(30, 64, 175, 0.15) 40%,
            transparent 80%
          ),
          linear-gradient(
            45deg,
            rgba(76, 29, 149, 0.1),
            rgba(30, 64, 175, 0.1)
          )
        `,
        backgroundColor: '#030B17',
        filter: 'blur(10px)'
      }}
    />
  );
};

export default MouseGradient;