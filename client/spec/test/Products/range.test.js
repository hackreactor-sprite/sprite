import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import range from '../../../src/helper/getRange';

const sku = {
  34554: { size: 's', quantity: 4 },
  45678: { size: 'm', quantity: 17 },
  98765: { size: 'l', quantity: 0 },
};

test('should return array of numbers matching for max quantity if under 15', () => {
  expect(range(sku, 34554).length).toEqual(4);
});

test('should return array of numbers up to 15 if max quantity is over 15', () => {
  expect(range(sku, 45678).length).toEqual(15);
});

test('should return empty array for quantity of 0', () => {
  expect(range(sku, 98765).length).toEqual(0);
});
