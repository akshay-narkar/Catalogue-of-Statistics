/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Homepage from '../../Containers/homepage';
import store from './store';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><Homepage /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});