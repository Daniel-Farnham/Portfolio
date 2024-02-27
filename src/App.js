import React, { useEffect, useState } from 'react';
import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import MenuController from './MenuController';
import ContactForm from './ContactForm'

function App() {
  // eslint-disable-next-line
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
      setViewportHeight(window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <div className="App">
      <header className="App-header" style={{ height: `${viewportHeight}px` }}>
        <div className="clouds"> 
          <img className="cloudImage" src={cloudImage} alt="cloudImage"></img>
          <img className="cloudImage_1" src={cloudImage} alt="cloudImage"></img>
        </div>
        <IntroductionText textType={"introduction"} textContent={"Hi there, my name is Daniel."} />
        <p>hello fiorst</p>
      <MenuController/>
      </header>
      <ContactForm/>
    </div>
  );
}

export default App;
