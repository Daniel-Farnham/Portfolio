import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import TemporaryDrawer from './MobileDrawer'; // Imported directly
import Menu from './Menu'; // Already imported
import MenuContent from './MenuContent';
import ContactForm from './ContactForm';

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);
  const [contentHeight, setContentHeight] = useState(0);
  const [sectionHeights, setSectionHeights] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDivId, setActiveDivId] = useState(null);

  const handleContentHeightChange = useCallback((height) => {
    console.log(height.hireMe + height.experience + height.projects);
    setContentHeight(height.hireMe + height.experience + height.projects + 2500); // 2500 for the extra padding for menuContent
    setSectionHeights(height);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [isMobileDevice]);

  return (
    <div className="App">
      <header className="App-header" style={{ height: `${contentHeight}px` }}> 
        <div className="clouds">
          <img className="cloudImage" src={cloudImage} alt="cloudImage" />
          <img className="cloudImage_1" src={cloudImage} alt="cloudImage" />
        </div>
        <div className="introductionText">
          <IntroductionText textType={"introduction"} textContent={"Hi there, my name is Daniel."} />
        </div>
        {/* Inline conditional rendering based on isMobileDevice */}
        {isMobileDevice ? (
          <TemporaryDrawer
            isOpen={isDrawerOpen}
            onToggle={setIsDrawerOpen}
            onActiveDivChange={setActiveDivId}
          />
        ) : (
          <Menu
            onActiveDivChange={setActiveDivId}
            isMobile={isMobileDevice}
            menuContentPosition={sectionHeights}
          />
        )}
        <MenuContent activeDiv={activeDivId} isMobile={isMobileDevice} onContentHeightChange={handleContentHeightChange} />
      </header>

      <ContactForm />
    </div>
  );
}

export default App;
