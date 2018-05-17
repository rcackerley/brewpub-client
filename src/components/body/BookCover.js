import React, {Fragment} from 'react';

let BookCover = ({img, icon}) =>
  <Fragment>
    <img alt="Book Cover" className="cover" src={img} />
    <img alt="Book Cover" className="shelf-beer" src={icon} />
  </Fragment>


export default BookCover;
