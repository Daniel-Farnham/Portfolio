import React from 'react';
import './MenuOverlay.scss';



function MenuOverlay({ activeDiv }) {
  
  // Check if div is active or not. 
  // currently the problem is that this will always be true if div-1 is clicked. 
  
  return (
      <div
      className={ `section-overlay` }
      > 
        <div className = {`overlay-1 ${activeDiv === 'div-1' ? 'showOverlay' : 'hideOverlay'}`} >
        </div>
        <div className = {`overlay-2 ${activeDiv === 'div-2' ? 'showOverlay' : 'hideOverlay'}`}>
        </div>
        <div className = {`overlay-3 ${activeDiv === 'div-3' ? 'showOverlay' : 'hideOverlay'}`}>
        </div>
       
      </div>
    
  );
}


/*
const divContent = {
  'div-1': <div>Hello World</div>,
  'div-2': <div>Hello World2</div>,
  'div-3': <div>Hello World3</div>,
}

function MenuContent({ isVisible, activeDiv }) {

  const isContentVisible = (divId) => {
    if (!isVisible) return 'inactiveContent';
    if (activeDiv === divId) return 'showContent'
    return 'inactiveContent'
  }
  return (
      <div
        className={ `unique-div ${isVisible ? 'showContent' : ''} ${activeDiv}`       /}
      >
      {divContent[activeDiv]}
    </div>
  );
  // Maybe I keep the menu content in here. 
}

*/
export default MenuOverlay
