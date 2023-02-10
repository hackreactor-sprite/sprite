import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleBubble from '../../../src/components/Products/StyleBubble';

const style = {
  style_id: 240511,
  name: 'Grey',
  original_price: '40.00',
  sale_price: null,
  'default?': false,
  photos: [
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },
  ],
  skus: {
    1394811: {
      quantity: 8,
      size: 'XS',
    },
    1394812: {
      quantity: 16,
      size: 'S',
    },
    1394813: {
      quantity: 17,
      size: 'M',
    },
    1394814: {
      quantity: 10,
      size: 'L',
    },
    1394815: {
      quantity: 15,
      size: 'XL',
    },
    1394816: {
      quantity: 6,
      size: 'XXL',
    },
  },
};

test('should render the image of selected style normally', () => {
  render(<StyleBubble style={style} />);
  const img = screen.getByRole('img', { name: /grey/i });
  expect(img).toBeInTheDocument();
});

test('should render the image of selected style normally', () => {
  render(<StyleBubble style={style} />);
  const img = screen.getByRole('img', { name: /grey/i });
  expect(img.id).toEqual("240511");
});

// testing for user click interactivity
