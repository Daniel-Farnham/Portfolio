import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import './IntroductionText.css'; // Import the CSS file
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the icons to the library
library.add(faEnvelope);


function IntroductionText() {
  const [nameChars, setNameChars] = useState([]);
  const [showParagraph, setShowParagraph] = useState(false); 

  useEffect(() => {
    const text = 'Hi there, my name is Daniel.'; 
    const chars = text.split('').map((char, index) => {
      const displayChar = char === ' ' ? '\u00A0' : char;
      return (
        <span key={index} className="char" style={{ animationDelay: `${index * 0.15}s` }}>
          {displayChar}
        </span>
      );
    });
    setNameChars(chars);

    const animationDuration = text.length * 0.15 * 1000; 
    const timeoutId = setTimeout(() => setShowParagraph(true), animationDuration);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    
    <div className="IntroductionText">
      <h1>{nameChars}</h1> {/* Render the array of character elements */}
      <p className = {showParagraph ? 'visible' : 'hidden'}>
        I'm sending this to you because I really admire the work of Future
        Friendly. So much so that I built a website to help you
        understand me better.
      </p> 
      
    </div>
  );
}

export default IntroductionText;

/*
<a href="mailto: danjf1210@gmail.com"className = {showParagraph ? 'visible' : 'hidden'}>
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
*/