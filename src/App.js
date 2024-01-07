import React, { useEffect, useState } from 'react';
import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import MobileDrawer from './MobileDrawer'
import Menu from './Menu';

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
    };
    
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <div className="App">
      <header className="App-header">
        <div className="clouds"> 
          <img className="cloudImage" src={cloudImage} alt="cloudImage"></img>
          <img className="cloudImage_1" src={cloudImage} alt="cloudImage"></img>
        </div>
        <IntroductionText textType={"introduction"} textContent={"Hi there, my name is Daniel."} />
        {isMobileDevice ? <MobileDrawer/> : <Menu/> }
      </header>
    </div>
  );
}

export default App;
