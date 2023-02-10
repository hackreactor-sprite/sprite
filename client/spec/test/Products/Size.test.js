import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Size from '../../../src/components/Products/Size';

const skuItem = 1394769;
const skusItem = {
  1394769: {
    quantity: 8,
    size: 'XS',
  },
  1394770: {
    quantity: 16,
    size: 'S',
  },
  1394771: {
    quantity: 17,
    size: 'M',
  },
  1394772: {
    quantity: 10,
    size: 'L',
  },
  1394773: {
    quantity: 15,
    size: 'XL',
  },
  1394774: {
    quantity: 4,
    size: 'XL',
  },
};
test('should render something', () => {
  render(<Size sku={skuItem} skus={skusItem} />);
  const sizeElement = screen.getByText('XS');
  expect(sizeElement).toBeTruthy();
});

test('should render an option tag for select dropdown list', () => {
  render(<Size sku={skuItem} skus={skusItem} />);
  const sizeElement = screen.getByText('XS');
  expect(sizeElement).toContainHTML('</option>');
});
