import getAverage from '../../src/helper/getAverage';

test('average of score 3 times 3 to be 9 divided by 3 people', () => {
  expect(getAverage({ 3: 3 })).toBe(3);
});
