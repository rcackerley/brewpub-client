import React from 'react';
import {connect} from 'react-redux';
import SingleBrewRec from './SingleBrewRec';
import {getBeersOfTheWeek} from '../../ajax/index';
import {setBeersOfTheWeek} from '../../actions/index';

class WeeklyBrews extends React.Component {

  componentDidMount() {
    let {setBeersOfTheWeek} = this.props
    getBeersOfTheWeek()
    .then(beers => setBeersOfTheWeek(beers))
  }

  render() {
    let {featuredBeers} = this.props
    return (
      <div className="weekly-recs">
        <h3>Brews of the Week</h3>
        <ul>
          {featuredBeers.map((beer, i) => <SingleBrewRec key={"beer" + i} beer={beer} />)}
        </ul>
      </div>
    )
  }
}
let mapDispatchToProps = dispatch => ({setBeersOfTheWeek: (beers) => dispatch(setBeersOfTheWeek(beers)) })
let mapStateToProps = state => ({featuredBeers: state.featuredBeers})
let WeeklyBrewsContainer = connect(mapStateToProps, mapDispatchToProps)(WeeklyBrews);
export default WeeklyBrewsContainer;
