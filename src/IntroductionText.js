import React, { useState, useEffect } from 'react'; 
import Links from './Links';
import './IntroductionText.css'; 

function IntroductionText({ textType, textContent }) {
 const [nameChars, setNameChars] = useState([]);
 const [showParagraph, setShowParagraph] = useState(false);


 useEffect(() => {
  const words = textContent.split(' ');
  let charCount = 0;

  const chars = words.map((word, wordIndex) => {
    const letters = word.split('').map((char, charIndex) => {
      const displayChar = char === ' ' ? '\u00A0' : char;
      return (
        <span key={charIndex} className="char" style={{ animationDelay: `${charCount++ * 0.15}s` }}>
          {displayChar}
        </span>
      );
    });
    
    if (wordIndex !== words.length - 1) {
      letters.push(
        <span key={word.length} className="char" style={{ animationDelay: `${charCount++ * 0.15}s` }}>
          {'\u00A0'}
        </span>
      );
    }

    return <span className="word" key={wordIndex}>{letters}</span>;
  });

  setNameChars(chars);

  const animationDuration = charCount * 0.12 * 1000;
  const timeoutId = setTimeout(() => setShowParagraph(true), animationDuration);

  return () => clearTimeout(timeoutId);
}, [textContent]);


 if (textType === "introduction") {
  return (
    <div className="contentText">
      <h1>{nameChars}</h1> 
      <p className = {showParagraph ? 'visible' : 'hidden'}>
        I'm sending this to you because I really admire the work you do. So much so that I built a website to help you
        understand me better.
      </p>
      < Links showLinks={showParagraph}/>
    </div>
  );
 }
 else if (textType === "hireMe") {
  return (
    <div className="contentText">
      <h1>{nameChars}</h1>
      < Links showLinks={showParagraph}/>
    </div>
    
    
  )
  
 }
 
}


export default IntroductionText;