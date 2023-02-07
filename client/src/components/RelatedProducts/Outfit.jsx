import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getAverage from '../../helper/getAverage';
import Star from '../reusable/Stars';

export default function Outfit({
  style, metadata, curProduct, handleDeleteOutfit, id,
}) {
  const photo = style.photos[0].url;

  return (
    <div
      className="carousel-item"
      style={{
        minWidth: '200px', width: '200px', overflow: 'hidden', boxShadow: '0 0 2px black',
      }}
    >
      <div
        className="outfit"
        style={{
          position: 'relative',
        }}
        id={id}
      >
        <button type="button" style={{ position: 'absolute', right: '0%' }} onClick={handleDeleteOutfit}>
          X
        </button>
        {photo ? <img className="productPhoto" src={photo} alt="primary product style" style={{ width: '200px', height: '225px', objectFit: 'cover' }} /> : <img className="productPhoto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="not found" style={{ width: '200px', height: '225px', objectFit: 'cover' }} />}
        <div>{curProduct.category}</div>
        <div>{style.name}</div>
        {!style.sale_price ? (
          <div>
            $
            {style.original_price}
          </div>
        ) : (
          <>
            <div style={{ color: 'red' }}>
              $
              {style.sale_price}
            </div>
            <div style={{ textDecoration: 'line-through' }}>
              $
              {style.original_price}
            </div>
          </>
        )}
        <div>
          <Star totalRanking={getAverage(metadata.ratings)} />
        </div>
      </div>
    </div>
  );
}
