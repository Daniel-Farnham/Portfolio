import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import './IntroductionText.css'; // Import the CSS file

function IntroductionText() {
  // Declare a state variable 'nameChars' and set it to an empty array
  const [nameChars, setNameChars] = useState([]);
  const [showParagraph, setShowParagraph] = useState(false); 

  // Run the effect when the component mounts
  useEffect(() => {
    const text = 'Hi there, my name is Daniel.'; 
    //const bodyText = "Im sending this to you because I really admire the work of Future Friendly. So much so that I built a website to help you understand me better.";
    const chars = text.split('').map((char, index) => {
      // If the character is a space, include it in the span element
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
