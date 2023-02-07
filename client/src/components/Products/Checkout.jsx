import React from 'react';
import Size from './Size';
import Quantity from './Quantity';
import range from '../../helper/getRange';

export default function Checkout({
  allSkus,
  setSelectedSku,
  setSizeId,
  sizeId,
  skus,
}) {
  //console.log('line 5 checkout sizeId: ', skus);

  const handleUpdate = (event) => {
    setSizeId(event.target.value);
  };

  let isLoaded;
  if (sizeId !== '') {
    isLoaded = true;
  } else {
    isLoaded = false;
  }

  return (
    <div>
      <select data-testid="sizeSelect" onChange={handleUpdate}>
        <option value="" selected>
          Select Size
        </option>
        {Object.keys(skus).map((sku) => (
          <Size key={sku} skus={skus} sku={sku} />
        ))}
      </select>
      <select data-testid="quantitySelect">
        <option value="" selected>
          -
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
