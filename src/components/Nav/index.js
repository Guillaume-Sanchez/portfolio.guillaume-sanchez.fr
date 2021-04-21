// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './nav.scss';

// == Composant
const Header = () => (
    <nav className="nav-portfolio">
      <NavLink className="nav-portfolio-link" to="/GradientPicker">GradientPicker</NavLink>
      <NavLink className="nav-portfolio-link" to="/Converter">Converter</NavLink>
      <NavLink className="nav-portfolio-link" to="/GitHubApi">GitHubApi</NavLink>
      <NavLink className="nav-portfolio-link" to="/Orecipes">Orecipes</NavLink>
    </nav>
);

// == Export
export default Header;
