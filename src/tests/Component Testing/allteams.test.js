import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Allteam from '../../Components/allteams';

const x = {
  id: 2,
  area: { id: 25, name: 'X' },
  crestUrl: 'X',
  name: 'abc',
};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Allteam x={x} /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
