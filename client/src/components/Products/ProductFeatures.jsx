import React, { useState, useEffect } from 'react';

export default function ProductOverview({ feature }) {
  //  ('current product: ', curProduct);
  return (
    <section>
      <p>{feature.feature} | {feature.value}</p>
    </section>
  );
}
