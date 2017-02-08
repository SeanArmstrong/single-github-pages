import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

console.log('load bundle');

render((
  <Router history={ browserHistory }>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
    <Route path="single-github-pages" component={App}>
      <Route path="repos" component={Repos}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="*" component='FOO'/>
  </Router>
), document.getElementById('app'))
