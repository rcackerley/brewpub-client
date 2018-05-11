import React from 'react';
import Rating from 'react-rating';
import {ratePairing} from '../../ajax/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



let BottleRatings = ({reviews, stars, white, orange, token, id, history}) => {
    let filledStars = Math.round(stars / reviews)
    return (
      <div className="reviews">
        {white ?
          <Rating initialRating={filledStars}
            onChange={value =>
              token ? ratePairing({id: id, stars: value}, token.token) : history.push('/menu')
            }
            emptySymbol={<img alt="empty-bottle-icon" className="bottle" src={"/images/empty-bottle-" + white + ".png"} className="bottle" />}
            fullSymbol={<img alt="full-bottle-icon" className="bottle" src={"/images/filled-bottle-" + white + ".png"} className="bottle" />}
          /> :
          <Rating initialRating={filledStars}
            onChange={value =>
              token ? ratePairing({id: id, stars: value}, token.token) : history.push('/menu')
            }
            emptySymbol={<img alt="empty-bottle-icon" className="bottle" src={"/images/empty-bottle-" + orange + ".png"} className="bottle" />}
            fullSymbol={<img alt="full-bottle-icon" className="bottle" src={"/images/filled-bottle-" + orange + ".png"} className="bottle" />}
          />
        }
        <span className="review-count">{reviews} reviews</span>
      </div>
    )
}

let mapStateToProps = state => ({token: state.token})
let BottleRatingsContainer = withRouter(connect(mapStateToProps)(BottleRatings))
export default BottleRatingsContainer;
