// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header-general">
    <div className="header-content">
      <NavLink className="header-title" to="/"><img src="https://www.guillaume-sanchez.fr/images/logo.png" alt="logo" /></NavLink>
      <div className="header-reseaux">
        <a className="header-reseaux-link" target="_blank" href="https://www.linkedin.com/in/guillaume-sanchez-b3ba831a3/"><i className="fab fa-linkedin" /></a>
        <a className="header-reseaux-link" target="_blank" href="https://twitter.com/Narko_G"><i className="fab fa-twitter-square" /></a>
        <a className="header-reseaux-link" target="_blank" href="https://github.com/Guillaume-Sanchez"><i className="fab fa-github-square" /></a>
      </div>
    </div>
    <nav className="header-nav">
      <a className="header-nav-link" href="https://www.guillaume-sanchez.fr/">Home</a>
      <a className="header-nav-link" href="https://www.guillaume-sanchez.fr/cv">CV</a>
      <NavLink className="header-nav-link" to="/">Projets</NavLink>
      <a className="header-nav-link" href="https://www.guillaume-sanchez.fr/contact">Contact</a>
    </nav>
  </header>
);

// == Export
export default Header;
