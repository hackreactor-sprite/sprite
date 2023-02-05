import React, { useState } from 'react';
import Star from '../reusable/Stars';
import getAverage from '../../helper/getAverage';

export default function ProductInfo({ curProduct, curStyle }) {
  // line 11 price needs to be set to the style's price
  // console.log('line 5 of product info: ', curStyle);
  return (
    <section>
      <h3>Product Info</h3>
      <h5>Stars go here</h5>
      <h5>{curProduct.category}</h5>
      <h3>{curProduct.name}</h3>
      {!curStyle.sale_price
        ? (
          <p>
            $
            {curStyle.original_price}
          </p>
        )
        : (
          <div>
            <p className="saleOut">
              $
              {curStyle.sale_price}
            </p>
            <p className="crossOut">
              <s>${curStyle.original_price}</s>
            </p>
          </div>
        )}
    </section>
  );
}
