import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from '../../../src/components/Products/ProductOverview';

const curProduct = {
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

const curProductMinusSlogan = {
  id: 40346,
  campus: 'hr-rfp',
  name: 'Morning Joggers',
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

const curProductMinusDescription = {
  id: 40346,
  campus: 'hr-rfp',
  name: 'Morning Joggers',
  slogan: 'Make yourself a morning person',
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

test('should render the current products slogan and description', async () => {
  render(<ProductOverview curProduct={curProduct} />);
  const slogan = screen.getByRole('heading');
  const description = await screen.getByText(
    /whether you're a morning person or not\. whether you're gym bound or not\. everyone looks good in joggers\./i,
  );
  expect(slogan.innerHTML).toBe('Make yourself a morning person');
  expect(description.innerHTML).toBe('Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.');
});

test('should not render slogan if it is not defined', async () => {
  render(<ProductOverview curProduct={curProductMinusSlogan} />);
  const slogan = await screen.queryByRole('heading');
  expect(slogan).toBeNull();
});

test('should not render description if it is not defined', async () => {
  render(<ProductOverview curProduct={curProductMinusDescription} />);
  const description = await screen.queryByText(
    /whether you're a morning person or not\. whether you're gym bound or not\. everyone looks good in joggers\./i,
  );
  expect(description).toBeNull();
});
