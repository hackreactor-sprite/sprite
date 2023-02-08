import React from 'react';

export default function Size({ sku, skus }) {
  // // ('line 4 of size info: ', skus[sku]);

  return (
    <option className="sizeOption" value={sku}>
      {skus[sku].size}
    </option>
  );
}
