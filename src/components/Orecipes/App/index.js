// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/container/Orecipes/Nav';
import Page from 'src/container/Orecipes/Page';
import Loader from '../Loader';

// == Composant
const App = ({ fetchRecipes, loading, checkLogged }) => {
  useEffect(() => {
    fetchRecipes();
    checkLogged();
  }, []); // effet exécuté seulement après le premier rendu de l'application

  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && (
        <>
          <Nav />
          <Page />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  // pas de paramètre
  fetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // pas de paramètre
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
