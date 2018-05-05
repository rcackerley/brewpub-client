import React from 'react';
import BookCard from './BookCard';
import {connect} from 'react-redux';
import {getPairingCards} from '../../ajax/index';
import {setBooks} from '../../actions/index'

class Cards extends React.Component {

  componentDidMount() {
    let {setBooks} = this.props;
    getPairingCards()
    .then(pairings => setBooks(pairings))
  }
  render() {
    let {books, modalInvisible} = this.props;

    if (modalInvisible) {
      return (
          <div className="cards">
            {books.map((book, i) => <BookCard key={`combo-${book["pairings.id"]}`} book={book} />)}
          </div>
      )
    } else {
      return null
    }
  }
}
let mapDispatchToProps = dispatch => ({setBooks: (books) => dispatch(setBooks(books))})
let mapStateToProps = state => ({books: state.books, modalInvisible: state.modalInvisible})
let CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);
export default CardsContainer;
