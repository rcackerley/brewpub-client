import React from 'react';
import SingleSpiritRec from './SingleSpiritRec';
import {connect} from 'react-redux';
import {getSpiritsOfTheWeek} from '../../ajax/index';
import {setSpiritsOfTheWeek} from '../../actions/index';

class WeeklySpirits extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let {setSpiritsOfTheWeek} = this.props
    getSpiritsOfTheWeek()
    .then(spirits => setSpiritsOfTheWeek(spirits))
  }
  render() {
    let {featuredSpirits} = this.props
    return (
      <div className="weekly-recs">
        <h3>Spirits of the Week</h3>
        <ul>
          {featuredSpirits.map(spirit => <SingleSpiritRec spirit={spirit} />)}
        </ul>
      </div>

    )
  }
}

let mapDispatchToProps = dispatch => ({setSpiritsOfTheWeek: (spirits) => dispatch(setSpiritsOfTheWeek(spirits)) })
let mapStateToProps = state => ({featuredSpirits: state.featuredSpirits})
let WeeklySpiritsContainer = connect(mapStateToProps, mapDispatchToProps)(WeeklySpirits);
export default WeeklySpiritsContainer;
