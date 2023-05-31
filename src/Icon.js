import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({ icon, link }) {
  return (
    <a href={link} className='icon'>
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  );
}

export default Icon;
