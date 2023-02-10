/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import QuestionAnswer from './QuestionAnswer';

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

describe('Question & Answers', () => {
  beforeEach(() => {
    render(<QuestionAnswer curProduct={mockProduct} QAList={mockList} />);
  });

  test('should update input textbox when typing', async () => {
    const input = await screen.getByRole('searchbox', {
      name: /questionanswer-search/i,
    });
    fireEvent.change(input, { target: { value: 'jos' } });
    expect(input.value).toBe('jos');
  });

  test('should show load component with header, searchbox, and list', async () => {
    const region = await screen.getByRole('region', {
      name: /questionanswers/i,
    });
    const searchbox = await screen.getByRole('searchbox', {
      name: /questionanswer-search/i,
    });
    const list = await screen.getByLabelText('list', {
      name: /questionanswer-search/i,
    });
    expect(region).toBeTruthy();
    expect(searchbox).toBeTruthy();
    expect(list).toBeTruthy();
  });

  test('renders a list with the correct number', async () => {
    const list = await screen.getByRole('tree', { name: /list/i });
    expect(list.childNodes.length).toBe(2);
  });

  test('filters list when typing 3 characters', async () => {
    const list = await screen.getByRole('tree', { name: /list/i });
    const input = await screen.getByRole('searchbox', {
      name: /questionanswer-search/i,
    });
    fireEvent.change(input, { target: { value: 'who' } });
    expect(list.childNodes.length).toBe(1);
  });

  test('should open the modal clicking on add question button', async () => {
    const addQuestionButton = await screen.getByRole('button', {
      name: /add a question \+/i,
    });

    fireEvent.click(addQuestionButton);
    const modal = await screen.getByTestId('modal');

    expect(modal).toBeInTheDocument();
  });
});
