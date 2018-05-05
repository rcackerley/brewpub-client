import React from 'react';

let BookShelfItem = ({item}) =>
  <div className="bar-cart">
    <img alt="Book Cover" className="shelf-cover" src={item.image} />
    <img alt="Beer Icon" className="shelf-beer" src={item.icon} />
  </div>

export default BookShelfItem;
