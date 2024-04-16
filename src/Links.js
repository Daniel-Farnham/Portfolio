import React from 'react';
import './Links.scss';

function Links({ showLinks, buttonText }) {
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`button-links ${showLinks ? 'visible' : 'hidden'}`}
      onClick={handleClick}
    >
      {buttonText}
      
    </button>
  );
}

export default Links;