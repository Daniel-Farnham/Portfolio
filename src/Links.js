import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Links.css'

function Links({ showLinks }) {
  return (
    <div className={`extraLinks ${showLinks ? 'visible' : 'hidden'}`}>
      {/* <a href="https://github.com/Daniel-Farnham" target="_blank" rel="noopener noreferrer">
        <GitHubIcon
         />
      </a> */}
      <a href="https://www.linkedin.com/in/daniel-farnham-84308522b/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      <a href="mailto:danjf1210@gmail.com">
        <EmailIcon />
      </a>
    </div>
  );
}

export default Links;
