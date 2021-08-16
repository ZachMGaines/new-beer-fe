/* eslint-disable max-len */
import React from 'react';
import { beerDetail } from '../state/beer';
import { useParams } from 'react-router';
import { useState } from 'react';
import { updateBeer } from '../services/beerApi';
import { Link } from 'react-router-dom';

const BeerDetailPage = () => {
  const [title, setTitle] = useState();
  const { id } = useParams();
  const { details, loading } = beerDetail(id);
  if (loading) return <h1>Loading...</h1>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      id,
      title
    };
    updateBeer(obj);
    setTimeout(() => {
      window.location.href = `beers/${obj.id}`;
    }, 1000);

  };

  return (
    <section>

      <h2>Beer: {details.name}</h2>
      <p>image: {details.image}</p>
      <p>ABV%: {details.abv}</p>
      <p>Type: {details.type}</p>
      <p>Rating: {details.rating}</p>


      <Link to={`/beers/${id}/update`}>Update!</Link>

    </section >
  );
};

export default BeerDetailPage;
