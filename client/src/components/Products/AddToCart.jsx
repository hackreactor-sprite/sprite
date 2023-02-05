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

        {/* <select placeholder="select size...">
          {size
            ? Object.values(curStyle.skus).map((sku) => <Size key={sku.size} sku={sku} />) : null}
        </select>
        <select placeholder="1">
          {quantity
            ? Object.values(curStyle.skus).map((sku) => <Quantity key={sku.size} sku={sku} />)
            : null}
          {/* <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        <button type="submit">Add To Cart</button>
        <button type="button">heart</button>
      </form>
    </div>
  );
}
