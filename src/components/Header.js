import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>What Beers Have You Tried?</h1>
      <a href="/"><button>Home</button></a>
      <NavLink to={'/create'}>
        <button>Add Beer</button>
      </NavLink>
    </header>
  );
};

export default Header;
