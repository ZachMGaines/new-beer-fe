import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import BeerList from '../BeerList';
import BeerCreate from '../BeerCreate';
import BeerDetailPage from '../BeerDetailPage';
import Header from '../Header';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route exact path="/create" component={BeerCreate} />
          <Route exact path="/beers/:id" component={BeerDetailPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
