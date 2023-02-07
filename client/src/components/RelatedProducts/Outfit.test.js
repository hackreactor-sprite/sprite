// import react-testing methods
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Outfit from './Outfit';

const style1 = {
  style_id: 240510,
  name: 'Black',
  original_price: '40.00',
  sale_price: null,
  'default?': true,
  photos: [
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },
  ],
  skus: {
    1394805: {
      quantity: 8,
      size: 'XS',
    },
    1394806: {
      quantity: 16,
      size: 'S',
    },
    1394807: {
      quantity: 17,
      size: 'M',
    },
    1394808: {
      quantity: 10,
      size: 'L',
    },
    1394809: {
      quantity: 15,
      size: 'XL',
    },
    1394810: {
      quantity: 6,
      size: 'XXL',
    },
  },
};
const curProduct1 = {
  id: 40346,
  campus: 'hr-rfp',
  name: 'Morning Joggers',
  slogan: 'Make yourself a morning person',
  description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  category: 'Pants',
  default_price: '40.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: '100% Cotton',
    },
    {
      feature: 'Cut',
      value: 'Skinny',
    },
  ],
};
const metadata1 = {
  product_id: '40346',
  ratings: {
    1: '21',
    2: '47',
    3: '42',
    4: '30',
    5: '80',
  },
  recommended: {
    false: '62',
    true: '158',
  },
  characteristics: {
    Fit: {
      id: 135224,
      value: '2.6209150326797386',
    },
    Length: {
      id: 135225,
      value: '3.1301775147928994',
    },
    Comfort: {
      id: 135226,
      value: '3.0058823529411765',
    },
    Quality: {
      id: 135227,
      value: '3.3696969696969697',
    },
  },
};

test('should have photo', async () => {
  render(<Outfit style={style1} curProduct={curProduct1} metadata={metadata1} />);
  const button = await screen.getByRole('button');
  expect(button.innerHTML).toBe('X');
});
