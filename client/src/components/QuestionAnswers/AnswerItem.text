/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import QAItem from './QAItem';

const mockProduct = {
  id: 40346,
  campus: 'hr-rfp',
  name: 'Morning Joggers',
  slogan: 'Make yourself a morning person',
  description:
    "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
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

const mockList = [
  {
    question_id: 573540,
    question_body: 'Where Is the chainmail?',
    question_date: '2022-02-22T00:00:00.000Z',
    asker_name: 'Din',
    question_helpfulness: 0,
    reported: false,
    answers: {},
  },
  {
    question_id: 426098,
    question_body: 'who let the cats out?',
    question_date: '2021-09-18T00:00:00.000Z',
    asker_name: 'jonathan',
    question_helpfulness: 0,
    reported: false,
    answers: {},
  },
];

describe('QA Item', () => {
  beforeEach(() => {
    render(<QAItem curProduct={mockProduct} QAList={mockList} />);
  });

  test('should open the modal clicking on add answer button', async () => {
    const treeitem = screen.getByRole('treeitem');

    const addAnswerButton = within(treeitem).getByRole('button', {
      name: /add answer/i,
    });
    fireEvent.click(addAnswerButton);
    const modal = await screen.getByTestId('modal');

    expect(modal).toBeInTheDocument();
  });
});
