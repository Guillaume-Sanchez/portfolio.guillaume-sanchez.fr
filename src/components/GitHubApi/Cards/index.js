/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import Card from './card';

import './cards.scss';


// == Composant
const Cards = ({ datas, count }) => (
  <main className="GitHubApi_cards">
    {datas.map((data) => (
      <Card
        className="GitHubApi_card"
        key={data.id}
        name={data.name}
        description={data.description}
        image={data.owner.avatar_url}
        login={data.owner.login}
      />
    ))}
  </main>
);

Cards.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.arrayOf(
        PropTypes.shape({
          login: PropTypes.string.isRequired,
          avatar_url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Cards;
