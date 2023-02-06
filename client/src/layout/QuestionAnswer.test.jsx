import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer';

const mockProduct = {
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description:
    'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
};

test('should show load component with header, searchbox, and list', async () => {
  render(<QuestionAnswer curProduct={mockProduct} />);

  expect(screen.getByRole('region', { name: /questionanswers/i })).toBeTruthy();
});
