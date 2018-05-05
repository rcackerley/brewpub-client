import React from 'react';

let SingleBrewRec = ({beer}) =>
  <li><img alt="beer icon" src={beer.icon} /><div>{beer.brewery}<br />{beer.name}</div></li>


export default SingleBrewRec;
