import React, { useState } from 'react';
import './Menu.scss';


function Menu() {
  const [activeItem, setActiveItem] = useState(''); 

  const handleClick = (item) => {
    //console.log(getCustomStyles(item)); 
    setActiveItem((prevItem) => (prevItem === item ? '' : item));
  }
  
  const findActive = (item) => {
    if (activeItem === 'menu-item-1' && item === 'menu-item-1') {
      return 'menu-1-active';
    } else if (activeItem === 'menu-item-2' && item === 'menu-item-1') {
      return 'menu-2-active';
    } else if (activeItem === 'menu-item-2' && item === 'menu-item-2') {
      return 'menu-3-active';
    } else if (activeItem === 'menu-item-3' && item === 'menu-item-1') {
      return 'menu-4-active';
    } else if (activeItem === 'menu-item-3' && item === 'menu-item-2') {
      return 'menu-5-active';
    } else if (activeItem === 'menu-item-3' && item === 'menu-item-3') {
      return 'menu-6-active';
    }
  }

  /*

  const getCustomStyles = (item) => {
    if (activeItem === 'menu-item-1' && item === 'menu-item-1') {
      return { marginTop: 0, marginBottom: 'auto' };
    } else if (activeItem === 'menu-item-2' && item === 'menu-item-1') {
      return { marginTop: 0, marginBottom: 0 };
    } else if (activeItem === 'menu-item-2' && item === 'menu-item-2') {
      return { marginBottom: 'auto' };
    } else if (activeItem === 'menu-item-3' && item === 'menu-item-1') {
      return { marginTop: 0, marginBottom: 0 };
    } else if (activeItem === 'menu-item-3' && item === 'menu-item-2') {
      return { marginBottom: 0 };
    } else if (activeItem === 'menu-item-3' && item === 'menu-item-3') {
      return { marginBottom: 'auto' };
    } else if (item === 'menu-item-1') {
      return { marginTop: 'auto' };
    } else {
      return {};
    }
  }
  */

  const menuItems = ['menu-item-1', 'menu-item-2', 'menu-item-3'];

  return (
    <div className="menu">
      {['menu-item-1', 'menu-item-2', 'menu-item-3'].map((item) => (
        <div
          key={item}
          className={`menu-item ${item}`}
          onClick={() => handleClick(item)}
          //style={getCustomStyles(item)}
        >
          <p>
            {item === 'menu-item-1'
              ? 'Experiences'
              : item === 'menu-item-2'
              ? 'Cool Projects'
              : 'Why You Should Hire Me'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
