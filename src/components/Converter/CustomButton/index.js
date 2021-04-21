import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({ open, manageClick }) => {
  let className = 'Converter_custom-button';
  if (open) {
    className += ' Converter_custom-button--open';
  }

  const handleClickOnButton = (event) => {
    manageClick();
  };

  return (
    <button 
      type="button"
      className={className}
      onClick={handleClickOnButton}
    >=
    </button>
  );
};

CustomButton.propTypes = {
  // booléen
  open: PropTypes.bool.isRequired,
  // fonction
  manageClick: PropTypes.func.isRequired,
};

export default CustomButton;
