import React, { useRef, useCallback, useEffect, useState } from 'react';
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
  const [introductionTextHeight, setIntroductionTextHeight] = useState(0);
  const introductionTextRef = useRef(null);
  
  const spaceBetweenElements = 1000;
  
  // Calculate height based on height of menuContent items and the space between each of these items
  const handleContentHeightChange = useCallback((height) => {
    setContentHeight(height.hireMe + height.experience + height.projects + spaceBetweenElements*3);
    setSectionHeights({ ...height, introductionText: introductionTextHeight });
  }, [introductionTextHeight]);

  const handleActiveDivChange = (divId) => {
    setActiveDivId(divId);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
      setIntroductionTextHeight(introductionTextRef.current.offsetHeight);
    };
  
    // Calculate the initial height
    setIntroductionTextHeight(introductionTextRef.current.offsetHeight);
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileDevice]);

  return (
    <div className="App">
      <header className="App-header" style={{ height: `${contentHeight}px` }}> 
        <div className="clouds">
          <img className="cloudImage" src={cloudImage} alt="cloudImage" />
          <img className="cloudImage_1" src={cloudImage} alt="cloudImage" />
        </div>
        <div className="introductionText" ref={introductionTextRef}>
          <IntroductionText textType={"introduction"} textContent={"Hi there, my name is Daniel."} />
        </div>
        {/* Inline conditional rendering based on isMobileDevice */}
        <MenuContent activeDiv={activeDivId} isMobile={isMobileDevice} onContentHeightChange={handleContentHeightChange} contentSpacing={spaceBetweenElements} />
        {isMobileDevice ? (
          <TemporaryDrawer
            isOpen={isDrawerOpen}
            onToggle={setIsDrawerOpen}
            onActiveDivChange={handleActiveDivChange}
            menuContentPosition={handleActiveDivChange}
            contentSpacing={spaceBetweenElements}
          />
        ) : (
          <Menu
            onActiveDivChange={handleActiveDivChange}
            isMobile={isMobileDevice}
            menuContentPosition={sectionHeights}
            contentSpacing={spaceBetweenElements}
          />
        )}
      </header>

      <ContactForm />
    </div>
  );
}

export default App;
