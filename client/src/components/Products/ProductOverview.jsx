import React, { useState, useEffect } from 'react';

export default function ProductOverview({ curProduct }) {
  // console.log('current product: ', curProduct);
  return (
    <section>
      {curProduct.slogan ? <h3>{curProduct.slogan}</h3> : <div/>}
      {curProduct.description ? <p>{curProduct.description}</p> : <div/>}
    </section>
  );
}
