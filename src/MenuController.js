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
      setIsMobileDevice(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const handleMenuItemClick = (itemId) => {
    setActiveItem(itemId);
    setIsDrawerOpen(false); // Close the drawer when a menu item is clicked
  };

  const handleActiveDivChange = (newActiveDivId) => {
    console.log("Active div changed to:", newActiveDivId);
    setActiveDivId(newActiveDivId); 
  };
  // TODO: I think this is not being read because "menu-item-1" doesn't exist yet. 
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