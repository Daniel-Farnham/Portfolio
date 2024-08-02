import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CloudAnimation = ({ 
  cloudImage, 
  cloudHeight = 100,
  direction = 'right',
  duration = 20,
  parallaxAmount = 100,
  mobileBreakpoint = 768,
  mobileVerticalOffset = 300 // New prop for mobile vertical positioning
}) => {
  const containerRef = useRef(null);
  const cloudRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint);
  const [currentCloudHeight, setCurrentCloudHeight] = useState(
    isMobile ? cloudHeight / 2 : cloudHeight
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < mobileBreakpoint;
      setIsMobile(mobile);
      setCurrentCloudHeight(mobile ? cloudHeight / 2 : cloudHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cloudHeight, mobileBreakpoint]);

  useEffect(() => {
    const cloud = cloudRef.current;
    const container = containerRef.current;

    let windowWrap = gsap.utils.wrap(-cloud.offsetWidth*6, window.innerWidth);

    // Position cloud at the bottom, adjusting for mobile
    const setCloudPosition = () => {
      const verticalPosition = isMobile 
        ? container.offsetHeight - mobileVerticalOffset 
        : container.offsetHeight;
      gsap.set(cloud, { y: verticalPosition });
    };

    setCloudPosition();

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
    const verticalTween = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const baseY = isMobile 
          ? container.offsetHeight - mobileVerticalOffset 
          : container.offsetHeight - 600;
        gsap.to(cloud, {
          y: baseY - progress * -parallaxAmount,
          overwrite: 'auto',
          ease: "none"
        });
      }
    });

    // Update cloud position on resize
    const resizeObserver = new ResizeObserver(setCloudPosition);
    resizeObserver.observe(container);

    return () => {
      horizontalTween.kill();
      verticalTween.kill();
      resizeObserver.disconnect();
    };
  }, [direction, duration, parallaxAmount, currentCloudHeight, isMobile, mobileVerticalOffset]);

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
          height: `${currentCloudHeight}px`,
          opacity: 0.9,
          zIndex: 0
        }}
      />
    </div>
  );
};

export default CloudAnimation;