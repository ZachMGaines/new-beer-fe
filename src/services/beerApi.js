/* eslint-disable max-len */
export const fetchAllBeers = async (page) => {
  const res = await fetch('https://pure-sands-36666.herokuapp.com/api/v1/beers');
  const json = await res.json();
  return json.slice((page - 1) * 3, page * 3);
};

export const fetchOneBeer = async (id) => {
  const res = await fetch(`https://pure-sands-36666.herokuapp.com/api/v1/${id}`);
  const json = await res.json();
  return json;
};

export const makeBeer = async (body) => {
  await fetch('https://pure-sands-36666.herokuapp.com/api/v1/beers', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(body)
  });
};

export const deleteBeer = async (id) => {
  await fetch(`https://pure-sands-36666.herokuapp.com/api/v1/${id}`, {
    method: 'DELETE'
  });
};

export const updateBeer = async (obj) => {
  await fetch(`https://pure-sands-36666.herokuapp.com/api/v1/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(obj)
  });
};
