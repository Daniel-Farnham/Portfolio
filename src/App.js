import React, { useEffect, useState } from 'react';
import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import TemporaryDrawer from './MobileDrawer'; // Imported directly
import Menu from './Menu'; // Already imported
import MenuContent from './MenuContent';
import ContactForm from './ContactForm';

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDivId, setActiveDivId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
      setViewportHeight(window.innerHeight);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Correctly access the first element's offsetHeight
      const header = document.getElementsByClassName('App-header')[0];
      const menuController = document.getElementsByClassName('menu')[0];

      if (header && menuController && scrollPosition >= header.offsetHeight - 500) {
        const menuScrollPosition = scrollPosition - header.offsetHeight; 
        console.log(menuController.scrollTop);
        menuController.scrollTop = 500; 
      }   
    }
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobileDevice]);
  // style={{ height: `${viewportHeight + 500}px` }}
  // Make the app-header height the same height as the menuContent. We already calculate this I believe. 
  return (
    <div className="App">
      <header className="App-header" > 
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
          />
        )}
        <MenuContent activeDiv={activeDivId} isMobile={isMobileDevice} />
      </header>

      <ContactForm />
    </div>
  );
}

export default App;
