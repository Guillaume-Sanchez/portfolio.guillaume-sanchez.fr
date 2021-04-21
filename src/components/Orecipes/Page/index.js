import React from 'react';
import PropTypes from 'prop-types';
/*
  - Routes sans Switch : il peut y avoir plusieurs routes qui correspondent à l'URL
 de la barre d'adresse (si on veut une comparaison stricte utiliser la prop exact)
  - Routes englobées dans Switch : on s'arrête à la première Route qui correspond
à l'URL (nécessaire en particulier quand on veut une page en cas d'erreur 404)
*/
import { Route } from 'react-router-dom';

import Recipe from '../Recipe';
import Home from '../Home';
import Header from '../Header';

import './page.scss';

const Page = ({ recipes }) => (
  <div className="page">
    <Header />
    <div className="page-content">
      <Route
        path="/"
        exact
      >
        <Home recipes={recipes} />
      </Route>
      <Route
        path="/recipe/:slug"
      >
        <Recipe recipes={recipes} />
      </Route>
    </div>
  </div>
);

Page.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Page;
