import React from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import HeroCard from './HeroCard';
import {getHeroCards} from '../../ajax/index';
import {setHeros} from '../../actions/index';

class HeroSlider extends React.Component {
  componentDidMount() {
    let {setHeros} = this.props
    getHeroCards()
    .then(cards => setHeros(cards))
  }
  render() {
    let {cards} = this.props;
    let settings = {
      centerMode: true,
      infinite: true,
      arrows: true,
      centerPadding: '25%',
      slidesToShow: 1,
      speed: 500,
      variableWidth: false,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '10%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <div className=" heros">
        <Slider {...settings}>
          {cards.map(card => <HeroCard card={card} />)}
        </Slider>
      </div>
    )
  }
}
let mapDispatchToProps = dispatch => ({setHeros: (cards) => dispatch(setHeros(cards))});
let mapStateToProps = (state) => ({cards: state.featuredHeros})
let HeroSliderContainer = connect(mapStateToProps, mapDispatchToProps)(HeroSlider);
export default HeroSliderContainer;
