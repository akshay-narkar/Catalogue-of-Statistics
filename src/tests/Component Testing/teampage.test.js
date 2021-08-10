/*eslint-disable*/

import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Teampage from '../../Containers/teampage';
import store from './store';

const props = {
  calldispatch: () => {},
  teaminfo: [{ id: 1 }],
};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><Teampage props={props} /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
