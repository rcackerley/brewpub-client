import React from 'react';

let SingleSpiritRec = ({spirit}) =>
  <li>
    <span className="tooltip-container">
      <img alt="spirit icon" src={spirit.icon} />
      <span className="tooltip tooltip-hidden tooltip-position">
        <p>{spirit.name}<br />{spirit.distillary}</p>
      </span>
    </span>
    <div>{spirit.distillary} {spirit.name}</div>
  </li>


export default SingleSpiritRec;
