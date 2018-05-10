import React from 'react';
import {connect} from 'react-redux';
import {getAdditionalPairingsByGenre, getPairingCards} from '../../ajax/index';
import {setVisibleBooks} from '../../actions/index';

let PairingsHeader = ({setVisibleBooks, books}) =>
  <div className="pairings-header">
    <h3>Browse Pairings by Genre</h3>
    <ul className="filters">
      <li onClick={event =>
        setVisibleBooks(books.slice(0,4))
      }>all</li>
      <li onClick={event => {
        let filteredBooks = books.filter(book => book.genre === event.target.textContent);
        setVisibleBooks(filteredBooks)
        }}>Fiction</li>
      <li onClick={event => {
        let filteredBooks = books.filter(book => book.genre === event.target.textContent);
        setVisibleBooks(filteredBooks)
      }}>Biography</li>
      <li onClick={event => {
        let filteredBooks = books.filter(book => book.genre === event.target.textContent);
        setVisibleBooks(filteredBooks)
      }}>Fantasy</li>
      <li onClick={event => {
        let filteredBooks = books.filter(book => book.genre === event.target.textContent);
        setVisibleBooks(filteredBooks)
      }}>Literature</li>
      <li onClick={event => {
        let filteredBooks = books.filter(book => book.genre === event.target.textContent);
        setVisibleBooks(filteredBooks)
      }}>Nonfiction</li>
    </ul>
  </div>

let mapDispatchToProps = dispatch => ({setVisibleBooks: (books) => dispatch(setVisibleBooks(books))})
let mapStateToProps = state => ({books: state.books});
let PairingsHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(PairingsHeader)
export default PairingsHeaderContainer;
