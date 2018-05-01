import React, {Fragment} from 'react';

let BookPairings = ({pairings}) =>
  <div className="book-pairings">
    <h6>Best Pairings:</h6>
    {pairings.map(pairing =>
      <Fragment>
        <span className="tooltip-container">
          <img className="recommended-pairing" src={pairing.icon} />
          <span className="tooltip">
          <p>{pairing.name}<br />{pairing.brewery}</p>
          </span>
          </span>
      </Fragment>)}
  </div>

export default BookPairings;
