import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CloudAnimation = ({ 
  cloudImage, 
  cloudHeight = 100,
  direction = 'right',
  duration = 20,
  parallaxAmount = 100 // New prop for controlling parallax intensity
}) => {
  const containerRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    const cloud = cloudRef.current;
    const container = containerRef.current;

    let windowWrap = gsap.utils.wrap(-cloud.offsetWidth, window.innerWidth);

    // Position cloud at the bottom
    gsap.set(cloud, { y: container.offsetHeight });

    // Horizontal animation
    const horizontalTween = gsap.to(cloud, {
      x: direction === "right" ? 10000 : -10000,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: x => windowWrap(parseFloat(x)) + "px"
      }
    });

    // Vertical parallax effect
    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(cloud, {
          y: (container.offsetHeight - 600) - progress * -parallaxAmount,
          overwrite: 'auto',
          ease: "none"
        });
      }
    });

    return () => {
      horizontalTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, duration, parallaxAmount]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}
    >
      <img 
        ref={cloudRef}
        src={cloudImage} 
        alt="Cloud"
        style={{ 
          position: 'absolute',
          height: `${cloudHeight}px`,
          opacity: 0.8,
          zIndex: 0
        }}
      />
    </div>
  );
};

export default CloudAnimation;