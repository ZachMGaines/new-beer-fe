import { useEffect, useState } from 'react';
import { fetchAllBeers, fetchOneBeer } from '../services/beerApi';

export const beerDetail = (id) => {
  const [loading, setLoading] = useState(true);
  const [details, setBeerDetails] = useState(null);

  useEffect(() => {
    fetchOneBeer(id)
      .then(setBeerDetails)
      .finally(() => setLoading(false));
  }, [id]);

  return { details, loading };
};

export const listBeer = (page) => {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchAllBeers(page)
      .then(setBeers)
      .finally(() => setLoading(false));
  }, [page]);

  return { beers, loading };
};

