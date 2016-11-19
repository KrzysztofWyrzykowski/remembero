import React from 'react';

const CurrentQuestion = ({ question }) => (
  <p className="current-question">
    {question}
  </p>
);

CurrentQuestion.propTypes = {
  question: React.PropTypes.string.isRequired
};


export default CurrentQuestion;
