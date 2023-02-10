import React from 'react';
import Size from './Size';
import Quantity from './Quantity';
import range from '../../helper/getRange';
import handleInteractions from '../../helper/handleInteractions';

export default function Checkout({
  allSkus,
  setSizeId,
  sizeId,
  skus,
}) {
  // ('line 5 checkout sizeId: ', skus);

  const handleUpdate = (event) => {
    setSizeId(event.target.value);
    handleInteractions({ element: 'sizeSelect', widget: 'checkout' });
  };

  let isLoaded;
  if (sizeId !== '') {
    isLoaded = true;
  } else {
    isLoaded = false;
  }

  return (
    <div>
      <select id="size-select" data-testid="sizeSelect" onChange={handleUpdate}>
        <option value="" selected>
          Select Size
        </option>
        {Object.keys(skus).map((sku) => (
          <Size key={sku} skus={skus} sku={sku} />
        ))}
      </select>
      <select id="quantity-select" data-testid="quantitySelect" onChange={() => handleInteractions({ element: 'quantitySelect', widget: 'checkout' })}>
        <option id="dash" value="" selected>
          ---
        </option>
        {isLoaded
          ? range(allSkus, sizeId).map((num) => (
              <Quantity key={num} num={num} />
            ))
          : null}
      </select>
    </div>
  );
}
