import renderer from 'react-test-renderer';
import QuestionAnswer from '../../src/layout/QuestionAnswer';

it('renders correctly', () => {
  const tree = renderer.create(<QuestionAnswer />).toJSON();
  expect(tree).toMatchSnapShot();
});
