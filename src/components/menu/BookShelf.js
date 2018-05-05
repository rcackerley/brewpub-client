import React from 'react';
import {connect} from 'react-redux';
import {getShelf} from '../../ajax/index';
import {setShelf} from '../../actions/index';
import BookShelfItem from './BookShelfItem';


class BookShelf extends React.Component {

  componentDidMount() {
      let {token, setShelf} = this.props;
      token && getShelf(token.token)
      .then(books => setShelf(books))
      .catch(err => console.log(err))
  }

  render() {
    let {shelf} = this.props;
    console.log(shelf)
    return (
      <div className="vertical-flex">
        <h2>My Bookshelf & Bar Cart</h2>
        <div className="horizontal-flex">
          {shelf && shelf.map(item => <BookShelfItem item={item} />)}
        </div>
      </div>
    )
  }
}

let mapDispatchToProps = dispatch => ({setShelf: books => dispatch(setShelf(books))})
let mapStateToProps = state => ({shelf: state.shelf, token: state.token});
let BookShelfContainer = connect(mapStateToProps, mapDispatchToProps)(BookShelf);
export default BookShelfContainer;
