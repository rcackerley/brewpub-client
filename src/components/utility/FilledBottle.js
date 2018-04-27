import React from 'react';

let FilledBottle = ({white, orange}) =>
  white ? <img alt="filled bottle icon" className="bottle" src={"images/filled-bottle-" + white + ".png"} /> :
  <img alt="filled bottle icon" className="bottle" src={"images/filled-bottle-" + orange + ".png"} />


export default FilledBottle;
