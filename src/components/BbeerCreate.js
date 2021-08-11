/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { makeBeer } from '../services/beerApi';

const BeerCreate = () => {
  const [name, setName] = useState('NAME');
  const [image, setImage] = useState('IMAGE');
  const [abv, setAbv] = useState('ABV%');
  const [type, setType] = useState('TYPE');
  const [rating, setRating] = useState('RATING');

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
