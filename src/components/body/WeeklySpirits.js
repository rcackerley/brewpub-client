import React from 'react';
import SingleSpiritRec from './SingleSpiritRec';
import {connect} from 'react-redux';

let WeeklySpirits = ({featuredSpirits}) =>
  <div className="weekly-recs">
    <h3>Spirits of the Week</h3>
    <ul>
      {featuredSpirits.map(spirit => <SingleSpiritRec spirit={spirit} />)}
    </ul>
    </div>



let mapStateToProps = state => ({featuredSpirits: state.featuredSpirits})
let WeeklySpiritsContainer = connect(mapStateToProps)(WeeklySpirits);
export default WeeklySpiritsContainer;
