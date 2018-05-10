import React from 'react';
import BookCard from './BookCard';
import {connect} from 'react-redux';
import {getPairingCards} from '../../ajax/index';
import {setBooks, setVisibleBooks} from '../../actions/index'

class Cards extends React.Component {

  componentDidMount() {
    let {setBooks, setVisibleBooks} = this.props;
    getPairingCards()
    .then(pairings => {
      setBooks(pairings);
      setVisibleBooks(pairings.slice(0,4))
    })
  }
  render() {
    let {books} = this.props;

    return (
        <div className="cards">
          {books.map((book, i) => <BookCard key={`combo-${book["pairings.id"]}`} book={book} />)}
        </div>
    )

  }
}
let mapDispatchToProps = dispatch => ({
  setBooks: (books) => dispatch(setBooks(books)),
  setVisibleBooks: (books) => dispatch(setVisibleBooks(books))
})
let mapStateToProps = state => ({books: state.visibleBooks})
let CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);
export default CardsContainer;
