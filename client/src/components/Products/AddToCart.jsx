import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';

export default function AddToCart({ curProduct, curStyle, sizeId, setSizeId }) {
  // // ('add to cart cur product: ', curProduct);
  const [selectedSku, setSelectedSku] = useState({}); // {id: , size: }
  const [allSkus, setAllSkus] = useState({}); // {323212: {xs: 12}, s: 4, m: 7}

  useEffect(() => {
    setSizeId('');
    setAllSkus(curStyle.skus);
  }, [curStyle]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <div>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit}>
        {styleLoaded ? (
          <Checkout
            setSizeId={setSizeId}
            sizeId={sizeId}
            setSelectedSku={setSelectedSku}
            allSkus={allSkus}
            skus={curStyle.skus}
          />
        ) : null}
        <button type="submit">Add To Cart</button>
        <button type="button">heart</button>
      </form>
    </div>
  );
}
