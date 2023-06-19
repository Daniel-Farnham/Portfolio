/*import React, { useEffect, useRef } from 'react';
import './SkillsTable.scss';
import PropTypes from 'prop-types';

const SkillsTable = ({ skills }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const clone = el.cloneNode(true);
    el.parentNode.appendChild(clone);
  }, []);

  return (
    <div className='scrollContainer'>
      <div className='skillsTableContainer' ref={scrollRef}>
        {skills.map((skill) => (
          <p className="skillItems" key={skill}> {skill}</p>
        ))}
      </div>
    </div>
  );
};

SkillsTable.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsTable;
*/



import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SkillsTable.scss';

const SkillsTable = ({ skills }) => {
  // Current carousel index
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  // Chunk skills into groups of 3
  const chunkedSkills = [];
  for (let i = 0; i < skills.length; i += 3) {
    chunkedSkills.push(skills.slice(i, i + 3));
  }

  // Automatically move carousel forward every 3000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((carouselIndex + 1) % chunkedSkills.length);
    }, 4000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [carouselIndex, chunkedSkills.length]);

  return (
    <div className='skillsTableContainer'>
      {chunkedSkills[carouselIndex].map((skill) => (
        <p className="skillItems" key={skill}> {skill}</p>
      ))}
    </div>
  );
};

SkillsTable.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsTable;

// CODE FOR CONTINOUS SKILL RUN
/*
import React from 'react';
import './SkillsTable.scss';
import PropTypes from 'prop-types';


const SkillsTable = ({ skills }) => {

  return (
    <div className='skillsTableContainer'>
      {skills.map((skill) => (
        <p className="skillItems" key={skill}> {skill}</p>
      ))}
    </div>
  );
};

SkillsTable.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsTable;
*/