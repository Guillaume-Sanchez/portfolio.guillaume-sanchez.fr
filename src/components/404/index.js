import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './404.scss';

const error404 = () => {

  return (
    <main className="error">
      <h1 className="error-title">Whoops, vous êtes visiblement perdu 🤔</h1>
      <p className="error-content">Voici un petit lien pour <a href="/">retourner à l'accueil</a></p>
      <img className="error-img" src="https://www.guillaume-sanchez.fr/images/404.gif" alt="" />
    </main>
  );
};

export default error404;
