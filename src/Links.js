import React from 'react';
import './Links.scss';

function Links({ showLinks }) {
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
      Say hello 👋
    </button>
  );
}

export default Links;