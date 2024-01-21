import React, { useState, useEffect } from 'react';
import TemporaryDrawer from './MobileDrawer';
import Menu from './Menu';
import MenuContent from './MenuContent';

function MenuController() {
  const [activeItem, setActiveItem] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);
  const [activeDivId, setActiveDivId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width has crossed the 700px mark and reset activeDivId if necessary
      if (window.innerWidth >= 700 && isMobileDevice) {
        setActiveDivId(null); // Reset activeDivId when going from mobile to desktop
      }
      setIsMobileDevice(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileDevice]); // Add isMobileDevice as a dependency

  const handleMenuItemClick = (itemId) => {
    setActiveItem(itemId);
    setIsDrawerOpen(false); 
  };

  const handleActiveDivChange = (newActiveDivId) => {
    setActiveDivId(newActiveDivId); 
  };

  return (
    <>
      {isMobileDevice ?
        <TemporaryDrawer
          isOpen={isDrawerOpen}
          onToggle={setIsDrawerOpen} 
          onActiveDivChange={handleActiveDivChange}
          /> :
        <Menu
          onActiveDivChange={handleActiveDivChange}
          isMobile={isMobileDevice}     
          />
        
      }

      <MenuContent activeDiv={activeDivId} isMobile={isMobileDevice} /> 
    </>
  );
}

export default MenuController; 