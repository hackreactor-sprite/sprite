import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';
import handleInteractions from '../../helper/handleInteractions';

export default function AddToCart({ curStyle, sizeId, setSizeId }) {
  // //console.log('add to cart cur product: ', curProduct);
  const [allSkus, setAllSkus] = useState({}); // {323212: {xs: 12}, s: 4, m: 7}
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    setSizeId('');
    setAllSkus(curStyle.skus);
  }, [curStyle]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleHeart = (event) => {
    event.preventDefault();
    setHeart(!heart);
    handleInteractions({ element: 'heart', widget: 'addToCart' });
  };

  let styleLoaded;
  if (curStyle.skus === undefined) {
    styleLoaded = false;
  } else {
    styleLoaded = true;
  }

  //  ('line 25 curStyle.skus: ', curStyle.skus);
  //  ('line 26 allSkus: ', allSkus);
  return (
    <div className="checkout">
      <h3 className="heading">Checkout</h3>
      <form id="checkout-form" onSubmit={handleSubmit}>
        {styleLoaded ? (
          <Checkout
            setSizeId={setSizeId}
            sizeId={sizeId}
            allSkus={allSkus}
            skus={curStyle.skus}
          />
        ) : null}
        <div className="checkout-buttons">
          <button className="big-btn submit" onClick={() => handleInteractions({ element: 'addToCart', widget: 'addToCart' })} type="submit">Add To Cart <i className="fa-solid fa-plus" /> </button>
          <button className="big-btn heart" onClick={handleHeart} type="button">
            {heart
              ? <i className="fa-solid fa-heart" />
              : <i className="fa-regular fa-heart" />}
          </button>
        </div>
      </form>
    </div>
  );
}
