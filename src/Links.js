import React from 'react';
import Icon from './Icon';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Links.css'

function Links({ showLinks }) {
  const icons = [
    { icon: faEnvelope, link: "mailto: danjf1210@gmail.com", size: "lg" },
    { icon: faGithub, link: "https://github.com/Daniel-Farnham", size: "lg" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/daniel-farnham-84308522b/", size: "lg" },
  ];

  return (
    <div className={`extraLinks ${showLinks ? 'visible' : 'hidden'}`}>
      {icons.map((iconData, index) =>
        <Icon key={index} icon={iconData.icon} link={iconData.link} />
      )}
    </div>
  );
}

export default Links;
