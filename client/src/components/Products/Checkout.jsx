import React, { useState } from 'react';
import Size from './Size';

export default function Checkout({ allSkus, setSelectedSku, skus }) {
  console.log('line 5 checkout skus: ', skus);

  const handleUpdate = (event) => {
    setSelectedSku(event.target.value);
  };

  return (
    <div>
      <select onChange={handleUpdate}>
        <option>Select Size</option>
        {Object.keys(skus).map((sku) => <Size key={sku} sku={sku} skus={skus} />)}
      </select>
    </div>
  );
}
// [{size: s, quantity: 15}, {size: m, quantity: 5}]

// {3545642: {size: s, quantity: 15},
// 2035233: {size: m, quantity: 4}}
