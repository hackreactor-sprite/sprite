// import react-testing methods
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Outfit from '../../src/components/RelatedProducts/Outfit';

test('should have placeholder image if id is invalid', async () => {
  render(<Outfit id={3984573} />);

  expect(document.querySelector('img.productPhoto')).toHaveAttribute('alt', 'not found');
});
