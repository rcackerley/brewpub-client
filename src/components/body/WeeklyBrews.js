import React from 'react';
import {connect} from 'react-redux';
import SingleBrewRec from './SingleBrewRec';

let WeeklyBrews = ({featuredBeers}) =>
  <div className="weekly-recs">
    <h3>Brews of the Week</h3>
    <ul>
      {featuredBeers.map(beer => <SingleBrewRec beer={beer} />)}
    </ul>
  </div>

let mapStateToProps = state => ({featuredBeers: state.featuredBeers})
let WeeklyBrewsContainer = connect(mapStateToProps)(WeeklyBrews);
export default WeeklyBrewsContainer;
