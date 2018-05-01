import React from 'react';
import BookCard from './BookCard';
import {connect} from 'react-redux';
import {getPairingCards} from '../../ajax/index';
import {setBooks} from '../../actions/index'

class Cards extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let {setBooks} = this.props;
    getPairingCards()
    .then(pairings => setBooks(pairings))
  }
  render() {
    let {books} = this.props;

    return (
      <div className="cards">
        {books.map(book => <BookCard book={book} />)}
      </div>
    )
  }
}
let mapDispatchToProps = dispatch => ({setBooks: (books) => dispatch(setBooks(books))})
let mapStateToProps = state => ({books: state.books})
let CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);
export default CardsContainer;
