/* eslint-disable linebreak-style */
// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import
import data from '../data/repos';
import Searchbar from '../Searchbar';
import Cards from '../Cards';
import Loader from '../Loader';

import './app.scss';

// console.log(data.items)

// == Composant
const App = () => {

  const [cards, setCards] = useState([]);

  const [count, setCount] = useState([]);

  const [result, setResult] = useState('');

  const [never, setNever] = useState(true);

  const [loading, setLoading] = useState(false);

  const [displayLodingError, setdisplayLodingError] = useState(null);

  const loadPosts = (value) => {

    setdisplayLodingError(false);

    setLoading(true);

    axios.get('https://api.github.com/search/repositories?q=' + value)
      .then((response) => {
        // traitement si la reponse est un succeès
        // console.log(response.data.items);
        setCards(response.data.items);
        setCount(response.data.total_count);
      })
      .catch((error) => {
        // traitement si la reponse es une erreur
        setdisplayLodingError(true);
        // console.log(error);
      })
      .finally(() => {
        // execute après le then ou le catch
        // console.log('finally');
        setLoading(false);
      });

  };

  const search = () => {
    setNever(false);
    loadPosts(result);
    // console.log(never);
    // console.log(loading);
  };

  /* useEffect(() => {
    search();
  }, []); */

  return (
    <div className="GitHubApi">
      <Searchbar
        setValue={setResult}
        manageSubmit={search}
      />
      {never && <div className="GitHubApi_search-result">Merci de réaliser une recherche ( par exemple react )</div>}
      {!never && loading && <Loader />}
      {!never && displayLodingError && <div className="GitHubApi_search-result search-result-nop">Une erreur a été détécté veuillez ré-essayer</div> }
      {!never && !loading && !displayLodingError && <div className="GitHubApi_search-result search-result-good">La recherche a donné {count} résultas</div>}
      {!loading && <Cards datas={cards} count={count} />}
    </div>
  );
};

// == Export
export default App;