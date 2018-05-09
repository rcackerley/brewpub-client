import React from 'react';
import {Link} from 'react-router-dom';
import ProfileImage from './ProfileImage';

let Navlinks = () =>
  <div className="nav-right">
    {/*<Link to="#"><img alt="search icon" className="icons" src="images/search-icon.png" /></Link>*/}
    <ProfileImage />
    <Link to="/shelf"><img alt="menu icon" className="icons" src="/images/menu-icon.png" /></Link>
  </div>

export default Navlinks;
