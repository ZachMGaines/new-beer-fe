import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import BeerList from '../BeerList';
import BeerCreate from '../BeerCreate';
import BeerDetailPage from '../BeerDetailPage';
import Header from '../Header';
import { updateThisBeer } from '../BeerUpdate';


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={BeerList} />
        <Route exact path="/create" component={BeerCreate} />
        <Route exact path="/beers/:id/update" component={updateThisBeer} />
        <Route exact path="/beers/:id" component={BeerDetailPage} />
        <Redirect to="/" />
      </Switch>

    </>
  );
}
