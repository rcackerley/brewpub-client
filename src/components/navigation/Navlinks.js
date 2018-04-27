import React from 'react';
import {Link} from 'react-router-dom';

let Navlinks = () =>
  <div className="nav-right">
    <Link to="#"><img alt="search icon" className="icons" src="images/search-icon.png" /></Link>
    <Link to="#"><img alt="profile" className="prof-thumbnail" src="images/robby.jpg" /></Link>
    <Link to="#"><img alt="menu icon" className="icons" src="images/menu-icon.png" /></Link>
  </div>

export default Navlinks;
