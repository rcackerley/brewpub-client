import React from 'react';
import BottleRatings from '../utility/Ratings';
import {connect} from 'react-redux';
import Modal from './Modal';
import {toggleModal} from '../../actions/index';

let FeaturedContent = ({card, toggleModal}) =>
  <div className="featured-content">
    <h3>{card.title}</h3>
    <h5>by {card.author}</h5>
      <BottleRatings id={card["pairings.id"]} reviews={card.reviews} stars={card.stars} white={'white'}/>
    <p className="summary">{card.description}</p>
    {//<input onClick={event => toggleModal()} type="checkbox" id="modal" />
    //<label for="modal" className={"book-color-" + card.class}>View Pairing</label>
    //<Modal />
    }
  </div>

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({toggleModal: () => dispatch(toggleModal())})
let FeaturedContentContainer = connect(mapStateToProps, mapDispatchToProps)(FeaturedContent)
export default FeaturedContentContainer;
