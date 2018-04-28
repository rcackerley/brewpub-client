import React from 'react';

let BookTitleAuthor = ({title, author}) =>
  <div className="title-author">
    <h3>{title}</h3>
    <h5>by {author}</h5>
  </div>


export default BookTitleAuthor;
