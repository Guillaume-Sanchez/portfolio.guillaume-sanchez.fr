/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'

// == Import
import './searchbar.scss';
import logoGit from '../assets/images/logo-github.png'

// == Composant
const Searchbar = ({ manageSubmit, setValue }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <header className="GitHubApi_header">
      <img className="GitHubApi_header-img" src={logoGit} alt="logo Git" />
      <form className="GitHubApi_search" onSubmit={handleSubmit}>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Rechercher..."
          className="GitHubApi_search-container"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
}; 

// == Export
export default Searchbar;