import React from 'react';
import {Link} from 'react-router-dom';
import ProfileImage from './ProfileImage';
import SearchBar from './Search';

let Navlinks = () =>
  <div className="nav-right">
    <SearchBar />
    <ProfileImage />
    <Link to="/shelf"><img alt="menu icon" className="icons" src="/images/menu-icon.png" /></Link>
  </div>

export default Navlinks;
