import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./MenuContent.scss";
import "./ContentBox.scss";

function ContentBox(props) {
  const boxRef = useRef(null);
  const contentRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFrontContent, setShowFrontContent] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(!window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;

    const flipBox = () => {
      setIsFlipped(!isFlipped);
      gsap.to(box, {
        duration: 0.8,
        rotationY: isFlipped ? 0 : 180,
        ease: "power2.inOut",
        onUpdate: function() {
          if (this.progress() > 0.4 && this.progress() < 0.75) {
            setShowFrontContent(isFlipped);
          }
        }
      });
      
      gsap.to(content, {
        duration: 0.8,
        rotationY: isFlipped ? 0 : 180,
        ease: "power2.inOut",
      });

      if (isMobile) {
        // Apply hover effect
        hoverEffect(1.05);
        // Remove hover effect after a short delay
        setTimeout(() => hoverEffect(1), 300);
      }
    };

    const hoverEffect = (scale) => {
      gsap.to(box, {
        duration: 0.3,
        scale: scale,
        boxShadow: scale > 1 ? "0px 3px 4px rgb(0, 0, 0)" : "none",
        backgroundColor: scale > 1 ? "rgba(244, 177, 76, 0)" : "rgba(244, 177, 76, 0)",
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsHovered(true);
        hoverEffect(1.05);
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsHovered(false);
        hoverEffect(1);
      }
    };

    box.addEventListener('click', flipBox);
    
    if (!isMobile) {
      box.addEventListener('mouseenter', handleMouseEnter);
      box.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      box.removeEventListener('click', flipBox);
      box.removeEventListener('mouseenter', handleMouseEnter);
      box.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isFlipped, isMobile]);

  return (
    <div 
      ref={boxRef} 
      id={props.id} 
      className={`content-box services-box ${isHovered ? 'hovered' : ''}`}
    >
      <div ref={contentRef} className="content-title">
        {showFrontContent ? (
          <>
            <img src={props.media.src} alt="animated-gif"/>
            <h1>{props.title}</h1>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/>
            </svg>
          </>
        ) : (
          <>
            <h1>{props.title}</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {props.content.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentBox;