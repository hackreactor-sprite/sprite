import React from 'react';

export default function Size({ sku, skus }) {
  console.log('line 4 of size info: ', skus[sku]);

  return (
    <option value={sku}>{skus[sku].size}</option>
  );
}
