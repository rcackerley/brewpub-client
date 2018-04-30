import React from 'react';
import FilledBottle from './FilledBottle';
import EmptyBottle from './EmptyBottle';

let BottleRatings = ({reviews, stars, white, orange}) => {
  let filledBottleIcons = [];
  for (let i = 0; i < Math.round(stars / reviews); i++) {
    filledBottleIcons.push('star');
  }
  let emptyBottleIcons = [];
  for (let i = 0; i < 5 - Math.round(stars / reviews); i++) {
    emptyBottleIcons.push('star');
  }
  return (
    <div className="reviews">
      {filledBottleIcons.map(bottle => <FilledBottle white={white} orange={orange}/>)}
      {emptyBottleIcons.map(bottle => <EmptyBottle white={white} orange={orange}/>)}
      <span>{reviews} reviews</span>
  </div>
)
}



export default BottleRatings;
