import React from 'react';
import SinglePairing from './SinglePairing';

let BookPairings = ({pairings}) =>
  <div className="book-pairings">
    <h6>Best Pairings:</h6>
    {pairings.map((pairing, i) =>
      <SinglePairing pairing={pairing} key={`pair-${pairing.id}`} />
    )}
  </div>

export default BookPairings;
