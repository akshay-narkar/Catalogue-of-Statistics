import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import rootReducer from './Reducers/index';
import apicall from './API/soccer';

const initstate = {
  teams: [],
  teaminfo: [],
};

const store = createStore(rootReducer, {
  teamupdatereducer: initstate,
  teamdeetsReducer: initstate,
}, applyMiddleware(thunk));

store.dispatch(apicall);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
