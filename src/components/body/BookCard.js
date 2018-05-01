import React from 'react';
import BookCover from './BookCover';
import BookTitleAuthor from './BookTitleAuthor';
import BottleRatings from '../utility/BottleRatings';
import BookPairings from './BookPairings';
import {getAdditionalBeers} from '../../ajax/index';
import {setPairings} from '../../actions/index';
import {connect} from 'react-redux';

class BookCard extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { book, setPairings } = this.props;
    getAdditionalBeers(book.type)
    .then(beers => {
      book.pairings = beers;
      console.log(book)
      return setPairings(book)})

  }

  render() {
    let { book } = this.props;
    return (
      <div className="book-card">
        <div className="book-info">
          <BookCover img={book.image} />
          <div className="book-content">
            <BookTitleAuthor title={book.title} author={book.author}/>
            <BottleRatings reviews={book.reviews} stars={book.stars} orange={'orange'}/>
            <p className="summary">{book.description}</p>
          </div>
        </div>
        {book.pairings && <BookPairings pairings={book.pairings} />}
      </div>
    )
  }
}
let mapDispatchToProps = dispatch => ({setPairings: (book) => dispatch(setPairings(book))})
let mapStateToProps = state => state;
let BookCardContainer = connect(mapStateToProps, mapDispatchToProps)(BookCard)
export default BookCardContainer
