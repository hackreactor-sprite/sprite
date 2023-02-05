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
  console.log('line 5 checkout sizeId: ', skus);

  const handleUpdate = (event) => {
    setSizeId(event.target.value);
  };

  let isLoaded;
  if (sizeId !== '') {
    isLoaded = true;
  } else {
    isLoaded = false;
  }

  // function range(skuObjects, chosenSize) {
  //   const creatingRange = [];
  //   let total = skuObjects[chosenSize].quantity;
  //   if (total > 15) {
  //     total = 15;
  //   }
  //   for (let i = 1; i <= total; i += 1) {
  //     creatingRange.push(i);
  //   }
  //   return creatingRange;
  // }
  // have a function that creates an array from 1 to quantity of selected sizeSku

  return (
    <div>
      <select onChange={handleUpdate}>
        <option disabled selected>
          Select Size
        </option>
        {Object.keys(skus).map((sku) => (
          <Size key={sku} skus={skus} sku={sku} />
        ))}
      </select>
      <select>
        <option disabled selected>
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
