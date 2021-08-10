/*eslint-disable*/

import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../../Components/App';
import store from './store';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
