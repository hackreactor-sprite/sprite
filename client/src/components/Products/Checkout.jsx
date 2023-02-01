import React, { useState } from 'react';
import Size from './Size';

export default function Checkout({ allSkus, setSelectedSku, skus }) {
  console.log('line 5 checkout skus: ', skus);

  const handleUpdate = (event) => {
    console.log(skus);
  };



  return (
    <div>
      <select onChange={handleUpdate}>
        {Object.values(skus).map((sku) => <Size key={sku.id} sku={sku} />)}
      </select>
      <select onChange={handleUpdate}>
        {Object.values(skus).map((sku) => <Size key={sku.id} sku={sku} />)}
      </select>
    </div>
  );
}
// [{size: s, quantity: 15}, {size: m, quantity: 5}]

// {3545642: {size: s, quantity: 15},
// 2035233: {size: m, quantity: 4}}
