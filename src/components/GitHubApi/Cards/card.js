/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react'

const CardExampleCardProps = ({
  name,
  description,
  image,
  login,
}) => (
  <Card
    image={image}
    header={name}
    meta={login}
    description={description}
  />
);

CardExampleCardProps.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

CardExampleCardProps.defaultProps = {
  description: '',
};

export default CardExampleCardProps;