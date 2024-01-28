import React, { useEffect, useState } from 'react';
import './Menu.scss';

// Will need to pass 
function Menu({ isMobile, onActiveDivChange }) {
  const [activeItem, setActiveItem] = useState('');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight); 
  const itemStyles = {
    itemHeight: 45,
    itemBorderWidth: 2,
  } 

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); 
    }
  }, []);

  const handleClick = (item) => {
    setActiveItem((prevItem) => {
      const newActiveItem = prevItem === item ? '' : item;
      // Call the callback function with the new active div ID
      onActiveDivChange(getActiveDivId(newActiveItem));
      return newActiveItem;
    });
  };

  const isMenu1Active = () => {
    return activeItem === 'menu-item-2' || activeItem === 'menu-item-3';
  };

  const isMenu2Active = () => {
    return activeItem === 'menu-item-3';
  };

  const getActiveDivId = (activeItemId) => {
    const activeIndex = menuItems.findIndex((item) => item.id === activeItemId);
    return activeIndex !== -1 ? `div-${activeIndex + 1}` : null;
  };

  const positionActiveDivs = () => {
    return windowHeight - (3 * itemStyles.itemHeight - 3 * itemStyles.itemBorderWidth); 
  }

  const menuItems = [
    { id: 'menu-item-1', label: 'Who Am I?', activeClass: 'menu-3-active', height: itemStyles.itemHeight, borderWidth: itemStyles.itemHeight,  activePosition: positionActiveDivs() },
    { id: 'menu-item-2', label: 'Experiences', activeClass: 'menu-1-active', height: itemStyles.itemHeight, borderWidth: itemStyles.itemHeight, activePosition: positionActiveDivs() },
    { id: 'menu-item-3', label: 'Cool Projects', activeClass: 'menu-2-active', height: itemStyles.itemHeight, borderWidth: itemStyles.itemHeight, activePosition: positionActiveDivs() },
    
  ];

  if (isMobile) {
    // Render a placeholder menu for mobile devices, might have to change className from menu-placeholder.
    return (
      <div className="menu-placeholder" style={{ height: windowHeight }}>
        {menuItems.map((item) => (
          <div 
          key={item.id}
          className={`menu-item ${item.id} ${
            ((item.id === 'menu-item-1' && isMenu1Active()) ||
              (item.id === 'menu-item-2' && isMenu2Active()) ||
              activeItem === item.id)
            
              ? item.activeClass
              : ''
          }`}
          style={{ height: 100 + itemStyles.itemBorderWidth, backgroundColor: `${activeItem === item.id ? "rgb(255, 205, 255)" : "white"}` }}
          onClick={() => handleClick(item.id)}
          >
            
            <p>{item.label}</p>
          </div>
        ))}

      </div>
    );
  } else {
    // Render the regular menu for non-mobile devices
    return (
      <div className="menu" style={{ height: windowHeight }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${item.id} ${
              ((item.id === 'menu-item-1' && isMenu1Active()) ||
                (item.id === 'menu-item-2' && isMenu2Active()) ||
                activeItem === item.id)
                ? item.activeClass
                : ''
            }`}
            style={{ height: item.height, 
            transform: ((item.id === 'menu-item-1' && isMenu1Active()) ||
                       (item.id === 'menu-item-2' && isMenu2Active()) ||
                        activeItem === item.id) ? `translateY(-${item.activePosition}px` : '',
            }}
            onClick={() => handleClick(item.id)}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;


