/* eslint-disable keyword-spacing */
import React, { useState } from 'react';
import Beer from './Beer';
import { listBeer } from '../state/beer';
import { deleteBeer } from '../services/beerApi';

const adventureList = () => {
  const [page, setPage] = useState(1);
  const { beers, loading } = listBeer(page);

  if (loading) return <h1>Loading...</h1>;

  const beerElements = beers.map(() => (
    <li key={beer.id}>
      <Beer {...beer} />
      <button onClick={() => {
        deleteBeer(beer.id); setTimeout(() => {
          window.location.reload();
        }, 1000);
      }}>Delete This Beer</button>
    </li>
  ));

  return (
    <>
      <button disabled={page <= 1} onClick={() => setPage((prevPage) =>
        prevPage - 1)}>&lt;</button>
      {page}
      <button disabled={beers.length < 3} onClick={() =>
        setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{beerElements}</ul>
    </>
  );
};

export default adventureList;
