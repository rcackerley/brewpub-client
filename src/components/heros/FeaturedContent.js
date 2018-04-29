import React from 'react';
import BottleRatings from '../utility/BottleRatings';

let FeaturedContent = ({card}) =>
  <div className="featured-content">
    <h3>{card.title}</h3>
    <h5>by {card.author}</h5>
      <BottleRatings reviews={card.reviews} stars={card.stars} white={'white'}/>
    <p className="summary">{card.description}</p>
    <button className={"book-color-" + card.class}>View Pairing</button>
  </div>


export default FeaturedContent;
