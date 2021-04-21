/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

const DirectionButton = ({ direction, label, updateDirection }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        updateDirection(direction);
        // console.log(`On veut changer la direction : ${direction}`);
      }}
    >
      {label}
    </button>
  );
};

DirectionButton.propTypes = {
  direction: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  updateDirection: PropTypes.func.isRequired,
};

export default DirectionButton;
