import React from 'react';

let EmptyBottle = ({white, orange}) =>
  white ? <img alt="empty-bottle-icon" className="bottle" src={"images/empty-bottle-" + white + ".png"} /> :
  <img alt="empty-bottle-icon" className="bottle" src={"images/empty-bottle-" + orange + ".png"} />


export default EmptyBottle;
