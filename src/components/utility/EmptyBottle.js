import React from 'react';

let EmptyBottle = ({white, orange}) =>
  white ?
    <img alt="empty-bottle-icon" className="bottle"
      onMouseOver={event => event.currentTarget.src="/mages/filled-bottle-" + white + ".png"}
      onMouseOut={event => event.currentTarget.src="/images/empty-bottle-" + white + ".png"}
      src={"/images/empty-bottle-" + white + ".png"} /> :
    <img alt="empty-bottle-icon"
      onMouseOver={event => event.currentTarget.src="/images/filled-bottle-" + orange + ".png"}
      onMouseOut={event => event.currentTarget.src="/images/empty-bottle-" + orange + ".png"}
      className="bottle" src={"/images/empty-bottle-" + orange + ".png"} />


export default EmptyBottle;
