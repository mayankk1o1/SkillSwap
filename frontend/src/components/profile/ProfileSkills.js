import React from 'react';
import PropTypes from 'prop-types';

const ProfileSkills = ({ profile: { skillsOffered, skillsWanted } }) => {
  return (
    <div className="profile-skills bg-light p-2">
      <div className="skills">
        <h2 className="text-primary">Skills Offered</h2>
        {skillsOffered.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-check"></i> {skill}
          </div>
        ))}
      </div>
      <div className="line"></div>
      <div className="skills">
        <h2 className="text-primary">Skills Wanted</h2>
        {skillsWanted.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-star"></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileSkills.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileSkills;
