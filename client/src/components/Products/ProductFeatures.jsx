import React, { useState, useEffect } from 'react';

export default function ProductFeature({ feature }) {
  //  ('current product: ', curProduct);
  return (
    <div className="feature">
      <p>{feature.feature} | {feature.value}</p>
    </div>
  );
}
