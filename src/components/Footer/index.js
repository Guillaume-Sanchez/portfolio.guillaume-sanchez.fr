// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <Link to="/mentions-légales">Mentions Légales</Link>
    <p className="footer-text">Copyright &copy; Guillaume Sanchez 2020</p>
    <div className="footer-reseaux">
      <a className="footer-reseaux-link" target="_blank" href="https://www.linkedin.com/in/guillaume-sanchez-b3ba831a3/"><i className="fab fa-linkedin"></i></a>
      <a className="footer-reseaux-link" target="_blank" href="https://twitter.com/Narko_G"><i className="fab fa-twitter-square"></i></a>
      <a className="footer-reseaux-link" target="_blank" href="https://github.com/Guillaume-Sanchez"><i className="fab fa-github-square"></i></a>
    </div>
  </footer>
);

// == Export
export default Footer;