import React, { useState } from 'react';
import './Menu.scss';
import MenuOverlay from './MenuOverlay';
import MenuContent from './MenuContent';

function Menu() {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? '' : item));
  };

  const menuItems = [
    { id: 'menu-item-1', label: 'Experiences', activeClass: 'menu-1-active' },
    { id: 'menu-item-2', label: 'Cool Projects', activeClass: 'menu-2-active' },
    { id: 'menu-item-3', label: 'Why You Should Hire Me', activeClass: 'menu-3-active' },
  ];

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

  return (
    <div className="menu">
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
          onClick={() => handleClick(item.id)}
        >
          <p>{item.label}</p>
          
        </div>
      ))}
      <MenuOverlay isVisible ={!!activeItem} activeDiv={getActiveDivId()} />
      <MenuContent activeDiv={getActiveDivId()} />
    </div>
  );
}

export default Menu;


