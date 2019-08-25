import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ exponent, bgColor, textColor }) => (
  <div
    className="tile"
    style={{
      backgroundColor: '#' + bgColor,
      color: '#' + textColor
    }}
  >
    {exponent ? 2 ** exponent : ''}
  </div>
);

Tile.propTypes = {
  exponent: PropTypes.number.isRequired
};

export default Tile;
