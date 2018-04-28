import React from 'react';
import BookCard from './BookCard';
import {connect} from 'react-redux';
import {getHeroPairings} from '../../ajax/index';

class Cards extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    getHeroPairings()
    .then(pairings => console.log(pairings))
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
let mapStateToProps = state => ({books: state.books})
let CardsContainer = connect(mapStateToProps)(Cards);
export default CardsContainer;
