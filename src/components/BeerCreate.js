/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { makeBeer } from '../services/beerApi';

const BeerCreate = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [abv, setAbv] = useState('');
  const [type, setType] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name, image, abv, type, rating
    };
    makeBeer(obj);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="name" onChange={((e) => setName(e.target.value))} value={name}></input>
    <input placeholder="image" onChange={((e) => setImage(e.target.value))} value={image}></input>
    <input placeholder="abv%" onChange={((e) => setAbv(e.target.value))} value={abv}></input>
    <input placeholder="type" onChange={((e) => setType(e.target.value))} value={type}></input>
    <input placeholder="rating" onChange={((e) => setRating(e.target.value))} value={rating}></input>
  </form>;
};

export default BeerCreate;
