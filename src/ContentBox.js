import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Links from './Links';
import "./MenuContent.scss";
import "./ContentBox.scss";

function ContentBox(props) {
  const boxRef = useRef(null);
  const contentRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFrontContent, setShowFrontContent] = useState(true);

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
      
      // Adjust content rotation to keep it visible
      gsap.to(content, {
        duration: 0.8,
        rotationY: isFlipped ? 0 : 180,
        ease: "power2.inOut",
      });
    };

    const hoverEffect = (scale) => {
      gsap.to(box, {
        duration: 0.6,
        scale: scale,
        boxShadow: scale > 1 ? "0px 3px 4px rgb(0, 0, 0)" : "none",
        backgroundColor: scale > 1 ? "rgba(244, 177, 76, 0" : "rgba(244, 177, 76, 0)",
        ease: "power2.out"
      });
    };

    box.addEventListener('click', flipBox);
    box.addEventListener('mouseenter', () => hoverEffect(1.05));
    box.addEventListener('mouseleave', () => hoverEffect(1));

    return () => {
      box.removeEventListener('click', flipBox);
      box.removeEventListener('mouseenter', () => hoverEffect(1.05));
      box.removeEventListener('mouseleave', () => hoverEffect(1));
    };
  }, [isFlipped]);

  return (
    <div ref={boxRef} id={props.id} className="content-box services-box">
      <div ref={contentRef} className="content-title">
        {showFrontContent ? (
          <>
            <h1>{props.title}</h1>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/>
            </svg>
          </>
        ) : (
          <>
            <h1>{props.title}</h1>
            <ul style={{ listStyleType: 'none', padding: 10 }}>
              {props.content.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
            
            <Links showLinks={true} buttonText="Say hello 👋"/>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentBox;