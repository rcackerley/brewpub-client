import React from 'react';

let BookPairings = ({pairings}) =>
  <div className="book-pairings">
    <h6>Best Pairings:</h6>
    {pairings.map(pairing => <img className="recommended-pairing" src={pairing.img} /> )}
  </div>

export default BookPairings;
