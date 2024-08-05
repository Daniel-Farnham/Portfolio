import React, { useState, useEffect, useRef } from 'react'; 
import Links from './Links';
import './IntroductionText.scss'; 

function IntroductionText({ textType, textContent, onAnimationComplete, startAnimation }) {
 const [nameChars, setNameChars] = useState([]);
 const [showParagraph, setShowParagraph] = useState(false);
 const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
 const animationInProgress = useRef(false);
 const timeoutId = useRef(null);

 useEffect(() => {
  if (startAnimation && !animationInProgress.current) {
    animationInProgress.current = true;
    
    const words = textContent.split(' ');
    const animationSpeed = 0.08;
    let charCount = 0;

    const chars = words.map((word, wordIndex) => {
      const letters = word.split('').map((char, charIndex) => {
        const displayChar = char === ' ' ? '\u00A0' : char;
        return (
          <span key={charIndex} className="char" style={{ animationDelay: `${charCount++ * animationSpeed}s` }}>
            {displayChar}
          </span>
        );
      });
      
      if (wordIndex !== words.length - 1) {
        letters.push(
          <span key={word.length} className="char" style={{ animationDelay: `${charCount++ * animationSpeed}s` }}>
            {'\u00A0'}
          </span>
        );
      }

      return <span className="word" key={wordIndex}>{letters}</span>;
    });

    setNameChars(chars);

    const animationDuration = charCount * animationSpeed * 1000;
    timeoutId.current = setTimeout(() => {
      setShowParagraph(true);
      animationInProgress.current = false;
      if (onAnimationComplete && typeof onAnimationComplete === 'function') {
        onAnimationComplete();
      }
    }, animationDuration);
  }

  return () => {
    // Don't clear the timeout on cleanup
  };
 }, [textContent, onAnimationComplete, startAnimation]);

 useEffect(() => {
  function handleResize() {
    setIsMobile(window.innerWidth < 700);
  }
  
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

  if (textType === "introduction") {
    return (
      <div className="contentText">
        <h1>{nameChars}</h1> 
        <p className={showParagraph ? 'visible' : 'hidden'}>
          I'm sending this to you because I really admire the work you do. So much so that I built a website to help you
          understand me better!
        </p>
        {!isMobile && <Links showLinks={showParagraph} buttonText="Say hello 👋"/>}
      </div>
    );
  }
  else if (textType === "hireMe") {
    return (
      <div className="contentText contentText-hireMe">
        <h1>{nameChars}</h1>
      </div> 
    )
  }
  else if (textType === "other") {
    return (
      <div className="contentText contentText-other">
        <h1>{nameChars}</h1>
      </div> 
    )
  }
 
 // Default return in case textType doesn't match
 return null;
}

export default IntroductionText;