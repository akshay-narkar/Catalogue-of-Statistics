import renderer from 'react-test-renderer';
import Filter from '../../Components/Error';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<Filter />).toJSON();

  expect(elem).toMatchSnapshot();
});
