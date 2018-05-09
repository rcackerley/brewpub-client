import React from 'react';
import BottleRatings from '../utility/Ratings';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

let FeaturedContent = ({card, toggleModal}) =>
  <div className="featured-content">
    <h3>{card.title}</h3>
    <h5>by {card.author}</h5>
      <BottleRatings id={card["pairings.id"]} reviews={card.reviews} stars={card.stars} white={'white'}/>
    <p className="summary">{card.description}</p>
    <Link to={{pathname: `/pairings/${card["pairings.id"]}`}}><button className={"book-color-" + card.class}>View Pairing</button></Link>

  </div>

let mapStateToProps = state => state;
let FeaturedContentContainer = connect(mapStateToProps)(FeaturedContent)
export default FeaturedContentContainer;
