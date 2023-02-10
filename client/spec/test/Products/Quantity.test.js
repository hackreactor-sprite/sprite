import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quantity from '../../../src/components/Products/Quantity';

const num = 13;

test('should render something', () => {
  render(<Quantity num={num} />);
  const quantityElement = screen.getByText('13');
  expect(quantityElement).toBeTruthy();
});
