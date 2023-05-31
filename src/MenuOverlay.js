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

export default MenuOverlay
