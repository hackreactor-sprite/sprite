import React, { useState } from 'react';

export default function Size({ sku }) {
  console.log('line 4 of checkout info: ', sku);

  return (
    <option value={sku.size}>{sku.size}</option>
  );
}
