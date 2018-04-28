import React from 'react';
import UserProfile from './UserProfile';
import Login from './Login';

let MainMenu = ({token}) =>
  <div className="menu-page">
    {token ? <UserProfile /> : <Login /> }
  </div>


export default MainMenu;
