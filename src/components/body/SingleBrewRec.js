import React from 'react';

let SingleBrewRec = ({beer}) =>
  <li><img src={beer.icon} /><div>{beer.brewery} {beer.name}</div></li>


export default SingleBrewRec;
