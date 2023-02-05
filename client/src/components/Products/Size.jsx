import React from 'react';

export default function Size({ sku, skus }) {
  console.log('line 4 of size info: ', sku);

  return <option className="sizeOption" value={sku}>{skus[sku].size}</option>;
}
