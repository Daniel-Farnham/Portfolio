import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Carousel.css';

const Carousel = ({ items, width = '100%', height = '400px', duration = 20 }) => {
  // Refs to access DOM elements
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Get the scroller element
    const scroller = scrollerRef.current;
    // Get the content of the scroller
    const scrollerContent = scroller.querySelector('.scroller-content');
    // Clone the content to create a seamless loop
    const scrollerContent2 = scrollerContent.cloneNode(true);
    // Append the cloned content to the scroller
    scroller.appendChild(scrollerContent2);

    // Create the GSAP animation
    gsap.to(scroller, {
      // Move the scroller to the left by the width of its content
      x: `-=${scrollerContent.offsetWidth}`,
      // Use linear easing for constant speed
      ease: "none",
      // Duration of one complete loop
      duration: duration,
      // Repeat indefinitely
      repeat: -1,
      // Modifiers to create seamless looping effect
      modifiers: {
        // This modifier ensures the x value loops back to 0 when it reaches the end
        x: gsap.utils.unitize(x => parseFloat(x) % scrollerContent.offsetWidth)
      }
    });

    // Cleanup function to kill the animation when component unmounts
    return () => {
      gsap.killTweensOf(scroller);
    };
  }, [duration]);

  return (
    <div ref={containerRef} className="carousel-container">
      {/* <h2>My past work</h2> */}
      <div ref={scrollerRef} className="carousel-scroller">
        <div className="scroller-content">
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              {typeof item === 'string' ? (
                // If item is a string, assume it's an image URL
                <img src={item} alt={`Item ${index}`} />
              ) : (
                // Otherwise, render the item as-is (assumed to be a React element)
                item
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;