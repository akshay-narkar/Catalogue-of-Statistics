/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Teamcard from '../../Components/teamcard';

const teaminfo = {
  founded: 1902,
  name: 'Real Madrid FC',
  shortName: 'Real Madrid',
  crestUrl: '-',
  website: '-',
  email: '-',
  address: '-',
  venue: '-',
  clubColors: '-',
  phone: '-',
  activeCompetitions: [{ name: 'La Liga' }],
  squad: [{ Name: 'xyx', Age: '12' }, { Name: 'xyxss', Age: '13' }],
  area: {
    name: '',
    id: 1,
  },
};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter>
    <Teamcard teaminfo={teaminfo} />
  </BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
