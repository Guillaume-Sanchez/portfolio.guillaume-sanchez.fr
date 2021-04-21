import React from 'react';

import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import CustomButton from '../CustomButton';

import currenciesList from '../data/currencies';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  };

  componentDidMount() {
    this.setPageTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currency !== this.state.currency) {
      this.setPageTitle();
    }
  }

  setPageTitle = () => {
    document.title = `${this.state.currency} - Converter`;
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  computeAmount = () => {
    const { baseAmount, currency } = this.state;
    const foundCurrency = currenciesList.find((data) => data.name === currency);
    const result = baseAmount * foundCurrency.rate;
    return parseFloat(result.toFixed(2));
  }

  setCurrency = (newCurrency) => {
    this.setState({
      currency: newCurrency,
    });
  }

  setSearch = (newValue) => {
    this.setState({
      search: newValue,
    });
  }

  setBaseAmount = (newValue) => {
    this.setState({
      baseAmount: Number(newValue),
    });
  }

  getFilteredCurrencies = () => {
    const { search } = this.state;
    const filteredCurrencies = currenciesList.filter((currency) => {
      return currency.name.toLowerCase().includes(search.toLowerCase());
    });
    return filteredCurrencies;
  }

  render() {

    const {
      open,
      baseAmount,
      currency,
      search,
    } = this.state;

    const result = this.computeAmount();
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} setBaseAmount={this.setBaseAmount} />
        <CustomButton open={open} manageClick={this.handleClick} />
        {open && (
          <Currencies
            currencies={filteredCurrencies}
            setCurrency={this.setCurrency}
            search={search}
            setSearch={this.setSearch}
          />
        )}
        <Amount currency={currency} amount={result} />
      </div>
    );
  }
}

export default App;
