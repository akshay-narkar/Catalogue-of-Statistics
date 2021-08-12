import renderer from 'react-test-renderer';
import Namefilter from '../../Components/namefilter';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<Namefilter />).toJSON();

  expect(elem).toMatchSnapshot();
});
