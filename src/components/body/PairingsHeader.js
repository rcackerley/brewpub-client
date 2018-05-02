import React from 'react';
import {connect} from 'react-redux';
import {getAdditionalPairingsByGenre} from '../../ajax/index';
import {setBooks} from '../../actions/index';

let PairingsHeader = ({setBooks}) =>
  <div className="pairings-header">
    <h3>Browse Pairings by Genre</h3>
    <ul className="filters">
      <li onClick={event =>
        getAdditionalPairingsByGenre(event.target.textContent)
        .then(books => setBooks(books))
      }>Fiction</li>
      <li onClick={event =>
        getAdditionalPairingsByGenre(event.target.textContent)
        .then(books => setBooks(books))
      }>Biography</li>
      <li onClick={event =>
        getAdditionalPairingsByGenre(event.target.textContent)
        .then(books => setBooks(books))
      }>Fantasy</li>
      <li onClick={event =>
        getAdditionalPairingsByGenre(event.target.textContent)
        .then(books => setBooks(books))
      }>Literature</li>
      <li onClick={event =>
        getAdditionalPairingsByGenre(event.target.textContent)
        .then(books => setBooks(books))
      }>Nonfiction</li>
    </ul>
  </div>

let mapDispatchToProps = dispatch => ({setBooks: (books) => dispatch(setBooks(books))})
let mapStateToProps = state => state;
let PairingsHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(PairingsHeader)
export default PairingsHeaderContainer;
