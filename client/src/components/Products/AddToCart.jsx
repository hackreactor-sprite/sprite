import React, { useState } from 'react';

export default function AddToCart({ curProduct }) {
  // console.log('add to cart cur product: ', curProduct);

  return (
    <div>
      <h3>Checkout</h3>
      <form>
        <select placeholder="select size...">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <select placeholder="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit">Add To Cart</button>
        <button type="button">heart</button>
      </form>
    </div>
  );
}
