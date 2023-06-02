import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({ icon, link, size }) {
  return (
    <a href={link} className='icon'>
      <FontAwesomeIcon icon={icon} size={size} />
    </a>
  );
}

export default Icon;
