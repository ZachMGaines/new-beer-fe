/* eslint-disable max-len */
import React from 'react';
import { beerDetail } from '../state/beer';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const BeerDetailPage = () => {

  const { id } = useParams();
  const { details, loading } = beerDetail(id);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/beers/${id}/update`);
  };
  if (loading) return <h1>Loading...</h1>;



  return (
    <section>

      <h2>Beer: {details.name}</h2>
      <p>image: {details.image}</p>
      <p>ABV%: {details.abv}</p>
      <p>Type: {details.type}</p>
      <p>Rating: {details.rating}</p>


      <button onClick={handleClick}>Update!</button>

    </section >
  );
};

export default BeerDetailPage;
