import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkout from '../../../src/components/Products/Checkout';

const checkoutSkus = {
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
const curCheckoutSkus = {
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
const sizeId = 1394769;

test('should render the select dropdown list for sizes', () => {
  render(<Checkout allSkus={checkoutSkus} skus={checkoutSkus} sizeId={sizeId} />);
  const checkoutElement = screen.getByTestId('sizeSelect');
  expect(checkoutElement).toBeInTheDocument();
});

test('should render the select dropdown list for quantities', () => {
  render(<Checkout allSkus={checkoutSkus} skus={checkoutSkus} sizeId={sizeId} />);
  const checkoutElement = screen.getByTestId('quantitySelect');
  expect(checkoutElement).toBeInTheDocument();
});

test('should render the options for size', () => {
  render(<Checkout allSkus={checkoutSkus} skus={checkoutSkus} sizeId={sizeId} />);
  const sizeOption = screen.getByRole('option', { name: 'S' });
  expect(sizeOption.innerHTML).toBe('S');
});

test('should render the options for quantity', () => {
  render(<Checkout allSkus={checkoutSkus} skus={checkoutSkus} sizeId={sizeId} />);
  const quantityOption = screen.getByRole('option', { name: '8' });
  expect(quantityOption.innerHTML).toBe('8');
});

test('should not render options for quantity if page is not loaded', () => {
  render(<Checkout sizeId="" allSkus={checkoutSkus} skus={checkoutSkus} />);
  const quantityOption = screen.getByTestId('quantitySelect');
  expect(quantityOption.children.length).toBe(1);
  // screen.debug();
});

// do click event handleUpdate for size
