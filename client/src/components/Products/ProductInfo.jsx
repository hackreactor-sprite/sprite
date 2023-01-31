import React, { useState } from 'react';

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
            <p className="crossOut">
              $
              {curStyle.original_price}
            </p>
            <p>
              $
              {curStyle.sale_price}
            </p>
          </div>
        )}
    </section>
  );
}
