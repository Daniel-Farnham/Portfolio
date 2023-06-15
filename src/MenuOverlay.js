import React from 'react';
import './MenuOverlay.scss';



function MenuOverlay({ activeDiv }) {
  
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
