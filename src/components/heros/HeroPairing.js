import React from 'react';
import BottleRatings from '../../components/utility/Ratings';

let HeroPairing = ({pairing}) =>
  <div className={pairing.class + ' full'}>
    <div className="featured-page-content">
      <div className="grid-3">
        <h4>{pairing.title}</h4>
        <h4>&</h4>
        <h4>{pairing.name}</h4>
        <h5 className="white">written by {pairing.author}</h5>
        <h5 className="white">brewed from {pairing.brewery}</h5>
        <p className="white">{pairing.description}</p>
        <BottleRatings reviews={pairing.reviews} stars={pairing.stars} white={"white"}/>
      </div>
      <div>
        <img className="feat-cover" src={'/' + pairing.image} />
        <img className="feat-beer" src={'/' + pairing.icon} />
      </div>
    </div>
  </div>
export default HeroPairing;
