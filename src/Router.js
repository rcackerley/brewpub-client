import React from 'react';
import App from './App';
import MenuScreen from './MenuScreen';
import ShelfScreen from './ShelfScreen';
import CreateAccountScreen from './CreateAccountScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

let RouterComp = () =>
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/menu" component={MenuScreen} />
      <Route exact path="/create-account" component={CreateAccountScreen} />
      <Route exact path="/shelf" component={ShelfScreen} />
    </div>
  </Router>


export default RouterComp;
