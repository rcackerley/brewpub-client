import React, {Fragment} from 'react';
import Navbar from './components/navigation/Navbar';
import Login from './components/menu/Login';

let MenuScreen = () =>
  <Fragment>
    <Navbar />
    <div className="menu-page">
      <Login />
    </div>
  </Fragment>


export default MenuScreen;
