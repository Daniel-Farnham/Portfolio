import React from 'react';
import Icon from './Icon'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Media({ type, src, title, videoRef }) {
  if (type === "video") {
    return (
      <video ref={videoRef} autoPlay muted playsInline loop>
        <source src={src}></source>
      </video>
    );
  } else if (type === 'image') {
    return <img src={src} alt={title} />;
  } else if (type === 'icon') {
    return <Icon icon={faGithub} link={src} size="2xl" />;
  } else {
    return null;
  }
}

export default Media 