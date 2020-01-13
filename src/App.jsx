import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home'
import List from './views/list'
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

export default function () {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};