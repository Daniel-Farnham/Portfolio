import React, { useState, useEffect } from 'react';
import TemporaryDrawer from './MobileDrawer';
import Menu from './Menu';
import MenuContent from './MenuContent';

function MenuController() {
  const [activeItem, setActiveItem] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);

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

  return (
    <>
      {isMobileDevice ?
        <TemporaryDrawer
          isOpen={isDrawerOpen}
          onToggle={setIsDrawerOpen} /> :
        <Menu
          onMenuItemClick={handleMenuItemClick} 
          isMobile={isMobileDevice}     
          />
      }


      {/* <MenuContent activeItem={activeItem} /> */}
    </>
  );
}

export default MenuController; 