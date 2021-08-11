import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>What Beers Have You Tried?</h1>
      <a href="/"><button>Home</button></a>
      <Link to={'/create'}>
        <button>Add Beer</button>
      </Link>
    </header>
  );
};

export default Header;
