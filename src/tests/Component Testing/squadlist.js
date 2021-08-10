import renderer from 'react-test-renderer';
import List from '../../Components/squadlist';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<List />).toJSON();

  expect(elem).toMatchSnapshot();
});
