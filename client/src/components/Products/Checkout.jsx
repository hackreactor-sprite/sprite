import React, { useState } from 'react';
import Size from './Size';

export default function Checkout({ setSelectedSku, skus }) {
  console.log('line 5 checkout skus: ', skus);

  const handleUpdate = (event) => {
    console.log(sku);
  };

  return (
    <div>
      <select onChange={handleUpdate}>
        {Object.values(skus).map((sku) => <Size key={sku.size} sku={sku} />)}
      </select>

    </div>
  );
}
