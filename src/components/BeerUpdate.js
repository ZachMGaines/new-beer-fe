/* eslint-disable max-len */
import { updateBeer } from '../services/beerApi';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useBeer } from '../state/beer.js';


export const updateThisBeer = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [abv, setAbv] = useState('');
  const [type, setType] = useState('');
  const [rating, setRating] = useState(0);


  const { id } = useParams();
  const beer = useBeer(id);
  console.log(name);
  useEffect(() => {
    setName(beer.name);
    setImage(beer.image);
    setAbv(beer.abv);
    setType(beer.type);
    setRating(beer.rating);
  }, [beer]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      id, name, image, abv, type, rating
    };
    updateBeer(obj);
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
    <button>Submit</button>
  </form>;
};


