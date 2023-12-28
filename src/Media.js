import React from 'react';
import Icon from './Icon'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Media({ type, src, title, videoRef }) {
  if (type === "video") {
    return (
      <video media={1} ref={videoRef} autoPlay muted playsInline loop>
        <source src={src}></source>
      </video>
    );
  } else if (type === 'image') {
    return <img media={1} src={src} alt={title} />;
  } else if (type === 'icon') {
    return <Icon icon-media={1} icon={faGithub} link={src} size="2xl" />;
  } else {
    return null;
  }
}

export default Media 