import getAverage from './getAverage';

const example1 = {
  1: '1',
  2: '0',
  3: '0',
  4: '0',
  5: '1',
};
const example2 = {
  1: '',
  2: '0',
  3: '2',
  4: '2',
  5: '2',
};

test('the average of 1, 5 divided by 2 should be 3 stars', () => {
  expect(getAverage(example1)).toBe(3);
});

test('the average of 3,3,4,4,5,5 divided by 6 should be 4 stars', () => {
  expect(getAverage(example2)).toBe(4);
});
