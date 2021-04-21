import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount, setBaseAmount }) => (
  <header className="Converter_header">
    <h1 className="Converter_header-title">Converter</h1>
    <input
      className="Converter_header-input"
      type="text"
      value={baseAmount}
      onChange={(event) => {
        setBaseAmount(event.target.value);
      }}
    />
    <p className="Converter_header-amount">euro</p>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

export default Header;




















