import React from 'react';

const Instruction = ({ level }) => (
  <p className="instruction">
    {level === 1 ? 'Type the word you see below and press submit' : 'Type the sequence of words you\'ve remembered and the one you see below'}
  </p>
);

Instruction.propTypes = {
  level: React.PropTypes.number.isRequired
};


export default Instruction;
