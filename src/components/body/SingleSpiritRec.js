import React from 'react';

let SingleSpiritRec = ({spirit}) =>
  <li><img alt="spirit icon" src={spirit.icon} /><div>{spirit.distillary} {spirit.name}</div></li>


export default SingleSpiritRec;
