/*eslint-disable*/

import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Squadlist from '../../Components/squadlist';

const playerinfo = {
  id: 1,
  shirtNumber: 1,
  position: 'FWD',
  name: 'ABC',
  dateOfBirth: '12-02-90',
  nationality: 'Spanish',
  role: 'Player',
};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Squadlist playerinfo={playerinfo} /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
