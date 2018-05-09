import React, {Fragment} from 'react';

let SinglePairing = ({pairing}) =>
  <Fragment>
    <span className="tooltip-container">
      <img alt="beer icon" className="recommended-pairing" src={pairing.icon} />
      <span className="tooltip tooltip-pairing-pos">
        <p>{pairing.name}<br />{pairing.brewery}</p>
      </span>
    </span>
  </Fragment>

export default SinglePairing
