import React from 'react';

const Score = ({ points }) => (
  <div>
    <p>SCORE</p>
    <p><span className="h1">{points}</span>POINTS</p>
  </div>
);

Score.propTypes = {
  points: React.PropTypes.number.isRequired
};

export default Score;
