import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getAverage from '../../src/helper/getAverage';
import '@testing-library/jest-dom';

test('average of score 3 times 3 to be 9 divided by 3 people', () => {
  expect(getAverage({ 3: 3 })).toBe(3);
});

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Fetch url="/greeting" />);

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'));
  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
});
