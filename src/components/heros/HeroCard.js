import React from 'react';
import FeaturedBookImage from './FeaturedBookImage';
import FeaturedContent from './FeaturedContent';

let HeroCard = ({card}) =>
  <div className={"hero-card " + card.class}>
    <div className="hero-ui">
      <FeaturedBookImage img={card.image} />
      <FeaturedContent card={card} />
    </div>
  </div>


export default HeroCard;
