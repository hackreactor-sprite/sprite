import React, { useState, useEffect } from 'react';
import ProductFeature from './ProductFeatures';

export default function ProductOverview({ curProduct }) {
  //  ('current product: ', curProduct);
  let loaded;
  if (curProduct.features) {
    loaded = true;
  } else {
    loaded = false;
  }

  return (
    <div className="overview">
      <div id="slogan">
        {curProduct.slogan ? <h3>{curProduct.slogan}</h3> : <div />}
      </div>
      <div id="description">
        {curProduct.description ? <p>{curProduct.description}</p> : <div />}
      </div>
      <div id="features">
        {loaded
          ? curProduct.features.map((feature) => <ProductFeature feature={feature} />)
          : null}
      </div>
    </div>
  );
}
