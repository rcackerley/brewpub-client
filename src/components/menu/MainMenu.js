import React from 'react';
import UserProfile from './UserProfile';
import Login from './Login';
import {connect} from 'react-redux';

let MainMenu = ({token}) =>
  <div className="menu-page">
    {token ? <UserProfile /> : <Login /> }
  </div>

let mapStateToProps = state => ({token: state.token});
let MainMenuContainer = connect(mapStateToProps)(MainMenu);
export default MainMenuContainer;
