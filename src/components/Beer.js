import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Beer = ({ id, name, image, abv, type, rating }) => {
  return <section>
    <Link to={`adv/${id}`}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>Alcohol %: {abv}</h2>
      <h2>Type: {type}</h2>
      <h2>Rating: {rating}</h2>
    </Link>
  </section>;
};

Beer.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}.isRequired;

export default Beer;
