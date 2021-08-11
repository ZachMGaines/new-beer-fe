import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import BeerList from '../beerList';
import BeerCreate from '../beerCreate';
import BeerDetailPage from '../beerDetailPage';
import Header from '../Header';


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={BeerList} />
        <Route exact path="/create" component={BeerCreate} />
        <Route exact path="/beers/:id" component={BeerDetailPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
