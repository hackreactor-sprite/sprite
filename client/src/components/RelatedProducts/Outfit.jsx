import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getAverage from '../../helper/getAverage';

export default function Outfit({
  style, metadata, curProduct,
}) {
  console.log('this is style', style);
  console.log('this is metadata', metadata);
  const photo = style.photos[0].url;

  return (
    <div className="carousel-item">
      <div className="outfit">
        {photo ? <img className="productPhoto" src={photo} alt="primary product style" style={{ width: '200px', height: '225px', objectFit: 'cover' }} /> : <img className="productPhoto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="not found" style={{ width: '200px', height: '225px', objectFit: 'cover' }} />}
        <div>{curProduct.category}</div>
        <div>{style.name}</div>
        <div>
          $
          {style.original_price}
        </div>
        <div>
          {getAverage(metadata.ratings)}
          /5 ★★★★★
        </div>
      </div>
    </div>
  );
}
