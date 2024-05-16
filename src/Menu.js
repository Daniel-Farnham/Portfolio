import React, { useEffect, useState } from 'react';
import './Menu.scss';

function Menu({ isMobile, onActiveDivChange, menuContentPosition, contentSpacing }) {
  
  const { hireMe, experience, projects, introductionText } = menuContentPosition;

  const [activeItem, setActiveItem] = useState('');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Define item styles
  const itemStyles = {
    itemHeight: 45,
    itemBorderWidth: 2,
  };

    // Define menu items
    const menuItems = [
      { id: 'menu-item-1', label: 'Who Am I?', activeClass: 'menu-3-active' },
      { id: 'menu-item-2', label: 'My Services', activeClass: 'menu-1-active' },
      { id: 'menu-item-3', label: 'Cool Projects', activeClass: 'menu-2-active' },
    ];
  
    // Calculate the cumulative heights of the sections. We multiply the contentSpacing by the number of spaces
    const cumulativeHeights = [
      introductionText,
      introductionText + hireMe + contentSpacing,
      introductionText + hireMe + experience + (contentSpacing)*2,
      introductionText + hireMe + experience + projects + (contentSpacing)*3,
    ];

  // Update window height on resize. We check the window height just to see how the divs should be positioned at the top of the screen. 
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // So this is set up to set up the divs becoming active item when they get past a certain scroll position. 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollPositionCentre = scrollPosition + window.innerHeight / 1.5;
      const containerHeight = introductionText + hireMe + experience + projects + contentSpacing * 3;
      const bottomThreshold = containerHeight - 1000;
  
      let isActiveItemSet = false;
  
      menuItems.forEach((item, index) => {
        if (
          scrollPositionCentre >= cumulativeHeights[index] &&
          scrollPositionCentre < cumulativeHeights[index + 1] &&
          scrollPositionCentre < bottomThreshold
        ) {
          setActiveItem(item.id);
          isActiveItemSet = true;
        }
      });
  
      if (!isActiveItemSet || scrollPositionCentre >= bottomThreshold) {
        setActiveItem('');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hireMe, experience, projects, introductionText, contentSpacing]);

  // Handle item click
  const handleClick = (itemId, index) => {
    const newActiveItem = activeItem === itemId ? '' : itemId;
    setActiveItem(newActiveItem);

    onActiveDivChange(getActiveDivId(newActiveItem));
    const sectionHeight = index === 0 ? cumulativeHeights[0] : cumulativeHeights[index];

    window.scrollTo({
      top: sectionHeight,
      behavior: 'smooth',
    });
  };

  // Check if menu items are active
  const isMenu1Active = () => activeItem === 'menu-item-2' || activeItem === 'menu-item-3';
  const isMenu2Active = () => activeItem === 'menu-item-3';

  // Get active div ID based on active item
  const getActiveDivId = (activeItemId) => {
    const activeIndex = menuItems.findIndex((item) => item.id === activeItemId);
    return activeIndex !== -1 ? `div-${activeIndex + 1}` : null;
  };

  // Calculate active div position. This is used to calculate the distance that the divs must travel from the bottom to the top of the screen.
  const positionActiveDivs = () => windowHeight - (3 * itemStyles.itemHeight - 3 * itemStyles.itemBorderWidth);

  // Render menu based on device type. Pretty much when activeItem matches the item.id. That particularly id is given the active class. Which means it moves.
  if (isMobile) {
    return (
      <div className="menu-placeholder" style={{ height: windowHeight }}>
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`menu-item ${item.id} ${
              ((item.id === 'menu-item-1' && isMenu1Active()) ||
                (item.id === 'menu-item-2' && isMenu2Active()) ||
                activeItem === item.id)
                ? item.activeClass
                : ''
            }`}
            style={{
              height: 100 + itemStyles.itemBorderWidth,
              backgroundColor: activeItem === item.id ? 'rgb(255, 205, 255)' : 'white',
            }}
            onClick={() => handleClick(item.id, index)}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="menu">
        <div className="menu-inner">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`menu-item ${item.id} ${
                ((item.id === 'menu-item-1' && isMenu1Active()) ||
                  (item.id === 'menu-item-2' && isMenu2Active()) ||
                  activeItem === item.id)
                  ? item.activeClass
                  : ''
              }`}
              style={{
                height: itemStyles.itemHeight,
                transform:
                  ((item.id === 'menu-item-1' && isMenu1Active()) ||
                    (item.id === 'menu-item-2' && isMenu2Active()) ||
                    activeItem === item.id)
                    ? `translateY(-${positionActiveDivs()}px)`
                    : '',
              }}
              onClick={() => handleClick(item.id, index)}
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