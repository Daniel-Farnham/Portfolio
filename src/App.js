import React, { useEffect, useState } from 'react';
import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import MobileDrawer from './MobileDrawer'
import Menu from './Menu';
import MenuController from './MenuController';

function App() {
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
      <MenuController/>
      {/* {isMobileDevice ? <MobileDrawer/> : <Menu/> } */}
        <div className="clouds"> 
          <img className="cloudImage" src={cloudImage} alt="cloudImage"></img>
          <img className="cloudImage_1" src={cloudImage} alt="cloudImage"></img>
        </div>
        <IntroductionText textType={"introduction"} textContent={"Hi there, my name is Daniel."} />
        
      </header>
    </div>
  );
}

export default App;
