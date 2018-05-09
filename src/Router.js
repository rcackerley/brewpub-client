import React, {Fragment} from 'react';
import App from './App';
import MenuScreen from './MenuScreen';
import ShelfScreen from './ShelfScreen';
import CreateAccountScreen from './CreateAccountScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {setToken} from './actions/index';
import {getTokenFromLocalStorage} from './lib/index';
import FeaturedPairingScreen from './components/heros/FeaturedPairingScreen';

class RouterComp extends React.Component {

  componentDidMount() {
    let {setToken} = this.props;
    let token = getTokenFromLocalStorage();
    setToken(token)
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={App} />
          <Route exact path="/menu" component={MenuScreen} />
          <Route exact path="/create-account" component={CreateAccountScreen} />
          <Route exact path="/shelf" component={ShelfScreen} />
          <Route path="/pairing:id" component={FeaturedPairingScreen} />
        </Fragment>
      </Router>
    )
  }
}

let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let mapStateToProps = state => state;
let RouterCompContainer = connect(mapStateToProps, mapDispatchToProps)(RouterComp)
export default RouterCompContainer;
