import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Component404 from './modules/404';

console.log('load bundle');

render((
  <Router history={ browserHistory }>
    <Route path="/single-github-pages" component={App}>
      <Route path="repos" component={ Repos }/>
      <Route path="about" component={ About }/>
    </Route>
    <Route path="*" component={ Component404 }/>
  </Router>
), document.getElementById('app'))
