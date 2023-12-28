import React, { useEffect, useState } from 'react';
import './Menu.scss';
import MenuOverlay from './MenuOverlay';
import MenuContent from './MenuContent';

function Menu() {
  const [activeItem, setActiveItem] = useState('');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight); 
  const itemStyles = {
    itemHeight: 55,
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
    setActiveItem((prevItem) => (prevItem === item ? '' : item));
  };

  const isMenu1Active = () => {
    return activeItem === 'menu-item-2' || activeItem === 'menu-item-3';
  };

  const isMenu2Active = () => {
    return activeItem === 'menu-item-3';
  };

  const getActiveDivId = () => {
    const activeIndex = menuItems.findIndex((item) => item.id === activeItem);
    return activeIndex !== -1 ? `div-${activeIndex + 1}` : null;
  }

  const positionActiveDivs = () => {
    return windowHeight - (3 * itemStyles.itemHeight - 3 * itemStyles.itemBorderWidth); 
  }

  const menuItems = [
    { id: 'menu-item-1', label: 'Experiences', activeClass: 'menu-1-active', height: itemStyles.itemHeight, borderWidth: itemStyles.itemHeight, activePosition: positionActiveDivs() },
    { id: 'menu-item-2', label: 'Cool Projects', activeClass: 'menu-2-active', height: itemStyles.itemHeight, borderWidth: itemStyles.itemHeight, activePosition: positionActiveDivs() },
    { id: 'menu-item-3', label: 'Why You Should Hire Me', activeClass: 'menu-3-active', height: itemStyles.itemHeight, borderWidth: itemStyles.itemHeight,  activePosition: positionActiveDivs() },
  ];

  return (
    <div className="menu"
     style={{ height: windowHeight }}>
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
          style={{ height: item.height, /* transform: "translateY(-100%)" */ 
          transform: ((item.id === 'menu-item-1' && isMenu1Active()) ||
                     (item.id === 'menu-item-2' && isMenu2Active()) ||
                      activeItem === item.id) ? `translateY(-${item.activePosition}px` : '',
          }}
          onClick={() => handleClick(item.id)}
        >
          <p>{item.label}</p>
          
        </div>
      ))}
      {/* <MenuOverlay isVisible ={!!activeItem} activeDiv={getActiveDivId()} /> */}
      <MenuContent activeDiv={getActiveDivId()} />
    </div>
  );
}

export default Menu;


