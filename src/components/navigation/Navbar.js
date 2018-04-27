import React from 'react';
import Logo from './Logo';
import Tagline from './Tagline';
import Navlinks from './Navlinks';

let Navbar = () =>
  <nav>
    <div className="nav-logo">
      <Logo />
      <Tagline />
    </div>
    <Navlinks />
  </nav>



export default Navbar;
