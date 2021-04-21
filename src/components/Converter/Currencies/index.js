import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

class Currencies extends React.Component {

  render() {

    const {
      currencies,
      setCurrency,
      search,
      setSearch,
    } = this.props;

    return (
      <div className="Converter_currencies">
        <input
          type="text"
          placeholder="Rechercher"
          className="Converter_currencies-search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <ul className="Converter_currencies-list">
          {currencies.map((currency) => (
            <li
              key={currency.name}
              className="Converter_currency"
              onClick={() => {
                setCurrency(currency.name);
              }}
            >
              {currency.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
