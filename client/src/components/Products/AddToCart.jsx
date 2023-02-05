import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';

export default function AddToCart({ curProduct, curStyle }) {
  // console.log('add to cart cur product: ', curProduct);
  const [selectedSku, setSelectedSku] = useState({}); // {id: , size: }
  const [allSkus, setAllSkus] = useState({}); // {323212: {xs: 12}, s: 4, m: 7}
  const [sizeId, setSizeId] = useState('');

  useEffect(() => {
    setAllSkus(curStyle.skus);
  }, [curStyle]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUpdate = (event) => {
    // setSelectedSku(event.target);
  };

  let styleLoaded;
  if (curStyle.skus === undefined) {
    styleLoaded = false;
  } else {
    styleLoaded = true;
  }

  // console.log('line 25 sku objects: ', curStyle.skus);
  return (
    <div>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit}>
        {styleLoaded ? (
          <Checkout
            allSkus={allSkus}
            setSizeId={setSizeId}
            sizeId={sizeId}
            setSelectedSku={setSelectedSku}
            skus={curStyle.skus}
          />
        ) : null}
        <button type="submit">Add To Cart</button>
        <button type="button">heart</button>
      </form>
    </div>
  );
}
