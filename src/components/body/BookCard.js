import React from 'react';
import BookCover from './BookCover';
import BookTitleAuthor from './BookTitleAuthor';
import BottleRatings from '../utility/BottleRatings';
import BookPairings from './BookPairings';

let BookCard = ({book}) =>
  <div className="book-card">
    <div className="book-info">
      <BookCover img={book.img} />
      <div className="book-content">
        <BookTitleAuthor title={book.title} author={book.author}/>
        <BottleRatings reviews={book.reviews} stars={book.stars} orange={'orange'}/>
        <p className="summary">{book.desc}</p>
      </div>
    </div>
    <BookPairings pairings={book.pairings} />
  </div>

export default BookCard
