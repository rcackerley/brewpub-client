import React from 'react';
import EmailForm from './EmailForm';

let Footer = () =>
  <footer>
    <h3 className="newsletter-header">Sign Up for the Weekly Barrel</h3>
    <div>
      <img className="barrel" src="images/barrel-icon.png" />
      <img className="barrel" src="images/barrel-icon.png" />
      <img className="barrel" src="images/barrel-icon.png" />
      <img className="barrel" src="images/barrel-icon.png" />
      <img className="barrel" src="images/barrel-icon.png" />
    </div>
    <EmailForm />
  </footer>

export default Footer;
