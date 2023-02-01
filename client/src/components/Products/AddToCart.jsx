import React, { useState } from 'react';
import Checkout from './Checkout';

export default function AddToCart({ curProduct, curStyle }) {
  // console.log('add to cart cur product: ', curProduct);
  const [selectedSku, setSelectedSku] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUpdate = (event) => {
    console.log(event.target);
    // setSelectedSku(event.target);
  };

  let styleLoaded;
  if (curStyle.skus === undefined) {
    styleLoaded = false;
  } else {
    styleLoaded = true;
  }

  console.log('line 9 sku objects: ', curStyle.skus);
  return (
    <div>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit}>
        {styleLoaded ? <Checkout setSelectedSku={setSelectedSku} skus={curStyle.skus} /> : null}
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
