/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import QAItem from './QAItem.test.jsx';
import QuestionAnswer from '../../layout/QuestionAnswer';

const mockProduct = {
  QA: {
    question_id: 644993,
    question_body: 'new question who dis?',
    question_date: '2023-02-06T00:00:00.000Z',
    asker_name: 'richard',
    question_helpfulness: 2,
    reported: false,
    answers: {
      5990533: {
        id: 5990533,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'not a seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
      5990534: {
        id: 5990534,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'not a seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
      5990535: {
        id: 5990535,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
      5990536: {
        id: 5990536,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
      5990537: {
        id: 5990537,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
      5990538: {
        id: 5990538,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
      5990539: {
        id: 5990539,
        body: 'Are these shoes gonna make my feet look bigger?',
        date: '2023-02-06T00:00:00.000Z',
        answerer_name: 'seller',
        helpfulness: 0,
        photos: [
          'https://web.postman.co/workspace/My-Workspace~d81eadb3-83ef-4227-8324-c804294a8fb0/request/25221147-886f4df6-0444-488d-a981-8bb688187b97',
        ],
      },
    },
  },
  curProduct: {
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
  },
};

describe('QA Item', () => {
  test('should open the modal clicking on add answer button', async () => {
    render(<QuestionAnswer curProduct={mockProduct.curProduct} />);
    await screen.getByRole('tree', { name: /list/i });
    await screen.getByRole('treeitem', {
      name: /q: new question who dis\? helpful\? \(2\) yes add answer qa-list load more answers/i,
    });
    const treeitem = screen.getByRole('treeitem', {
      name: /q: new question who dis\? helpful\? \(2\) yes add answer qa-list load more answers/i,
    });
    const addAnswerButton = within(treeitem).getByRole('button', {
      name: /add answer/i,
    });
    fireEvent.click(addAnswerButton);

    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  test('loads and displays the headers for question and answers', async () => {
    render(<QAItem curProduct={mockProduct.curProduct} QA={mockProduct.QA} />);

    expect(screen.getByText('Q:')).toBeTruthy();
    expect(screen.getByText('A:')).toBeTruthy();
  });
});
