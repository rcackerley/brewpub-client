import React from 'react';
import BookCard from './BookCard';
import {connect} from 'react-redux';

let Cards = ({books}) =>
  <div className="cards">
    {books.map(book => <BookCard book={book} />)}
  </div>

let mapStateToProps = state => ({books: state.books})
let CardsContainer = connect(mapStateToProps)(Cards);
export default CardsContainer;
