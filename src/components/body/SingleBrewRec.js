import React from 'react';

let SingleBrewRec = ({beer}) =>
  <li>
    <span className="tooltip-container">
      <img alt="beer icon" src={beer.icon} />
      <span className="tooltip tooltip-hidden tooltip-position">
        <p>{beer.name}<br />{beer.brewery}</p>
      </span>
    </span>
    <div>{beer.brewery}<br />{beer.name}</div>
  </li>


export default SingleBrewRec;
