import React from 'react';

let UserProfile = ({user}) =>
  <div className="vertical-flex">
    <img className="menu-prof-image" src="images/robby.jpg"/>
    <h3>robby ackerley</h3>
    <p>username: rcackerley<br />
       email: rcackerley@me.com<br />
       password: ***********
    </p>

  </div>

export default UserProfile;
