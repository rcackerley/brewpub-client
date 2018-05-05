import React from 'react';
import MailChimpForm from './MailChimpForm';

let Footer = () =>
  <footer>
    <h3 className="newsletter-header">Sign Up for the Weekly Barrel</h3>
    <div className="barrel-container">
      <img alt="barrel icon" className="barrel" src="images/barrel-icon.png" />
      <img alt="barrel icon" className="barrel" src="images/barrel-icon.png" />
      <img alt="barrel icon" className="barrel" src="images/barrel-icon.png" />
      <img alt="barrel icon" className="barrel" src="images/barrel-icon.png" />
      <img alt="barrel icon" className="barrel" src="images/barrel-icon.png" />
    </div>
    <MailChimpForm />
  </footer>

export default Footer;
