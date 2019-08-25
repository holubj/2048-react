import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score }) => <h2>Score: {score}</h2>;

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;
