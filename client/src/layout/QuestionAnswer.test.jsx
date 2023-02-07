/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
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

jest.mock('axios');

describe('Question & Answers', () => {
  describe('When API call successful', () => {
    render(<QuestionAnswer curProduct={mockProduct} />);
    const mockResp = [
      {
        question_id: 644930,
        question_body: 'Josh was here',
        question_date: '2023-02-02T00:00:00.000Z',
        asker_name: 'Josh',
        question_helpfulness: 25,
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
            helpfulness: 2,
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
          5990306: {
            id: 5990306,
            body: 'This is my answer!',
            date: '2023-02-02T00:00:00.000Z',
            answerer_name: 'nobdy',
            helpfulness: 0,
            photos: [
              'http://res.cloudinary.com/dfxarumgq/image/upload/v1675377677/rgv8sdfvpupuorfbrtke.webp',
            ],
          },
        },
      },
      {
        question_id: 642170,
        question_body: 'What sizes does this come in?',
        question_date: '2022-07-18T00:00:00.000Z',
        asker_name: 'pickleBack',
        question_helpfulness: 5,
        reported: false,
        answers: {
          5990308: {
            id: 5990308,
            body: 'It has all sizes',
            date: '2023-02-02T00:00:00.000Z',
            answerer_name: 'Josh',
            helpfulness: 1,
            photos: [
              'http://res.cloudinary.com/dfxarumgq/image/upload/v1675378014/b32wqm6dvwgtbq7n2non.jpg',
            ],
          },
        },
      },
      {
        question_id: 543075,
        question_body: 'testing',
        question_date: '2021-11-06T00:00:00.000Z',
        asker_name: 'cadfadfs',
        question_helpfulness: 5,
        reported: false,
        answers: {
          5986435: {
            id: 5986435,
            body: 'another test',
            date: '2022-07-16T00:00:00.000Z',
            answerer_name: '1234',
            helpfulness: 0,
            photos: [],
          },
          5986444: {
            id: 5986444,
            body: 'it works now!',
            date: '2022-07-16T00:00:00.000Z',
            answerer_name: 'success',
            helpfulness: 0,
            photos: [],
          },
        },
      },
      {
        question_id: 543077,
        question_body: 'testing',
        question_date: '2021-11-06T00:00:00.000Z',
        asker_name: 'cadfadfs',
        question_helpfulness: 4,
        reported: false,
        answers: {
          5986419: {
            id: 5986419,
            body: 'This is a test answer',
            date: '2022-07-16T00:00:00.000Z',
            answerer_name: 'test answer',
            helpfulness: 0,
            photos: [],
          },
        },
      },
    ];
    const resp = { data: mockResp };
    axios.get.mockResolvedValue(resp);

    test('renders list when API succeeds', async () => {
      const list = screen.getByRole('tree', { name: /list/i });
      expect(list.childNodes.length).toBe(4);
    });

    test('filters list when typing 3 characters', async () => {
      const list = screen.getByRole('tree', { name: /list/i });
      const input = screen.getByRole('searchbox', {
        name: /questionanswer-search/i,
      });
      fireEvent.change(input, { target: { value: 'jos' } });
      expect(list.childNodes.length).toBe(1);
    });
  });

  test('should update input textbox when typing', async () => {
    const input = screen.getByRole('searchbox', {
      name: /questionanswer-search/i,
    });
    fireEvent.change(input, { target: { value: 'jos' } });
    expect(input.value).toBe('jos');
  });

  test('should show load component with header, searchbox, and list', async () => {
    render(<QuestionAnswer curProduct={mockProduct} />);

    expect(
      screen.getByRole('region', { name: /questionanswers/i }),
    ).toBeTruthy();

    expect(
      screen.getByRole('searchbox', { name: /questionanswer-search/i }),
    ).toBeTruthy();
    expect(
      screen.getByLabelText('list', { name: /questionanswer-search/i }),
    ).toBeTruthy();
  });

  test('should open the modal clicking on add question button', async () => {
    render(<QuestionAnswer curProduct={mockProduct} />);
    const addQuestionButton = screen.getByTestId('question-form-button');
    fireEvent.click(addQuestionButton);

    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
