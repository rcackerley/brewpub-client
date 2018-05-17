import React, {Fragment} from 'react';

let FeaturedBookImage = ({img, icon}) =>
  <Fragment>
      <img alt="Book Cover" className="featured-image" src={img} />
      <img alt="Book Cover" className="featured-beer-image" src={icon} />
  </Fragment>

export default FeaturedBookImage;
