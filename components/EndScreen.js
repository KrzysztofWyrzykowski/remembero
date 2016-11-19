import React from 'react';
import SharePanel from './SharePanelList';

const EndScreen = ({level, points}) => (
  <div className="modal">
    <div className="modal__content">
      <h2 className="modal__content__header">Game Over!</h2>
      <h3 className="modal__content__subheader">You got level {level}</h3>

      <div className="score">
        <p className="score__points">{points}</p>
        <p>points</p>
      </div>

      <SharePanel />

      <a href="/remembero" className="button">Try again</a>
    </div>
  </div>
);

EndScreen.propTypes = {
  level: React.PropTypes.number.isRequired,
  points: React.PropTypes.number.isRequired
};


export default EndScreen;
