import React, {Fragment} from 'react';
import {getSearchTerms} from '../../ajax/index';
import Ionicon from 'react-ionicons';
import {connect} from 'react-redux';
import {setVisibleBooks} from '../../actions/index';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerms: [],
      searchString: ''
    }
  }

  componentDidMount() {
    getSearchTerms()
    .then(terms => {
      let newTerms = terms.map(term => {term.icon = term.icon.slice(7, 12); return term})
      this.setState({searchTerms: newTerms})
    })
  }

  render() {
    let {books, setVisibleBooks} = this.props;
    let handleChange = (event) => {
        this.setState({searchString: event.target.value});
      }

    let filterSearch = (term) => {
      if (term.icon === "beers") {
        let foundBeer = books.filter(book => term.name === book.name);
        setVisibleBooks(foundBeer);
        this.setState({searchString: ''});
      } else {
        let foundBook = books.filter(book => term.name === book.title);
        setVisibleBooks(foundBook);
        this.setState({searchString: ''});
      }
    }

    let { searchTerms } = this.state;
    let searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) searchTerms = searchTerms.filter((c) => c.name.toLowerCase().match(searchString));
    return (
      <Fragment>
        <form className="search-form" autoComplete="on">
          <input className="search-bar" id="search" name="search" type="text" onChange={ event => handleChange(event)}
            placeholder="What are you looking for?" />
          <input className="search-submit" id="search_submit" value="search" type="submit" />
        </form>
        { searchString.length >= 1 &&
        <ul className="suggestions">
          {searchTerms.map((term, i) => <li onClick={event => filterSearch(term)} key={"terms-"+ i}>{term.name} <Ionicon icon={term.icon === "beers" ? "ios-beer" : "ios-book"} fontSize="15px" color="#e28730" /></li>)}
        </ul>
        }
      </Fragment>
    )
  }
}

let mapDispatchToProps = dispatch => ({setVisibleBooks: (books) => dispatch(setVisibleBooks(books)) });
let mapStateToProps = state => ({books: state.books})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
