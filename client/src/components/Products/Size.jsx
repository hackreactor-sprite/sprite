import React, { useState } from 'react';

export default function Size({ sku }) {
  return <option value={sku.size}>{sku.size}</option>;
}
