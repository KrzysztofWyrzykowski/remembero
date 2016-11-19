import React from 'react';

const Level = ({ level }) => (
  <div className="level">
    <p className="level__number">{level}</p>
    <p className="level__description">LEVEL</p>
  </div>
);

Level.propTypes = {
  level: React.PropTypes.number.isRequired
};

export default Level;
