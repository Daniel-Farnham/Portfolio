import React, { useState, useEffect } from 'react';
import './Menu.scss';

function Menu({ activeSection, onSectionChange, isVisible, isMobile }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Define menu items
  const menuItems = [
    { id: 'menu-item-1', label: 'Who Am I?', activeClass: 'menu-3-active' },
    { id: 'menu-item-2', label: 'My Services', activeClass: 'menu-1-active' },
    { id: 'menu-item-3', label: 'Cool Projects', activeClass: 'menu-2-active' },
  ];

  // Update window height on resize
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle item click
  const handleClick = (index) => {
    onSectionChange(index + 1);  // +1 because sections are 1-indexed in your structure
  };

  // Check if menu items are active
  const isMenu1Active = () => activeSection >= 2;
  const isMenu2Active = () => activeSection >= 3;

  // Calculate active div position
  const positionActiveDivs = () => windowHeight - (3 * 55 - 3 * 2); 

  if (isMobile) {
    return (
      <div className="menu-placeholder" style={{ height: windowHeight }}>
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`menu-item ${item.id} ${
              ((item.id === 'menu-item-1' && isMenu1Active()) ||
                (item.id === 'menu-item-2' && isMenu2Active()) ||
                activeSection === index + 1)
                ? item.activeClass
                : ''
            }`}
            style={{
              height: 100 + 2, 
              backgroundColor: activeSection === index + 1 ? 'rgb(255, 205, 255)' : 'white',
            }}
            onClick={() => handleClick(index)}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className={`menu ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="menu-inner">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`menu-item ${item.id} ${
                ((item.id === 'menu-item-1' && isMenu1Active()) ||
                  (item.id === 'menu-item-2' && isMenu2Active()) ||
                  activeSection === index + 1)
                  ? item.activeClass
                  : ''
              }`}
              style={{
                height: 55,
                transform:
                  ((item.id === 'menu-item-1' && isMenu1Active()) ||
                    (item.id === 'menu-item-2' && isMenu2Active()) ||
                    activeSection === index + 1)
                    ? `translateY(-${positionActiveDivs()}px)`
                    : '',
              }}
              onClick={() => handleClick(index)}
            >
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;