/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import QAItem from './QAItem';

const curObj = {
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
const question = {
  question_id: 644930,
  question_body: 'Josh was here',
  question_date: '2023-02-02T00:00:00.000Z',
  asker_name: 'Josh',
  question_helpfulness: 24,
  reported: false,
  answers: {
    5990246: {
      id: 5990246,
      body: 'So what',
      date: '2023-02-02T00:00:00.000Z',
      answerer_name: 'Josh',
      helpfulness: 0,
      photos: [],
    },
    5990248: {
      id: 5990248,
      body: 'Who is Josh?',
      date: '2023-02-02T00:00:00.000Z',
      answerer_name: 'Nobody',
      helpfulness: 1,
      photos: [],
    },
    5990257: {
      id: 5990257,
      body: 'JOSH IS AMAZINGGGGG',
      date: '2023-02-02T00:00:00.000Z',
      answerer_name: 'Someone',
      helpfulness: 8,
      photos: [],
    },
    5990258: {
      id: 5990258,
      body: 'something random',
      date: '2023-02-02T00:00:00.000Z',
      answerer_name: 'someone',
      helpfulness: 0,
      photos: [],
    },
  },
};
test('loads and displays greeting', async () => {
  render(<QAItem QA={question} curProduct={curObj} />);

  expect(screen.getByText('Q:')).toBeTruthy();
});
