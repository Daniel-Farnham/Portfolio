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
