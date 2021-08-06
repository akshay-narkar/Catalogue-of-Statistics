import React from 'react';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import rootReducer from './Reducers/index';

const initstate = {
  books: [{
    Id: Math.floor((Math.random() * 1000000)),
    Title: 'Harry Potter & The Prisoners of Askaban',
    Category: 'Kids',
  },
  { Id: Math.floor((Math.random() * 1000000)), Title: 'Shoe Dog', Category: 'Biography' },
  { Id: Math.floor((Math.random() * 1000000)), Title: 'The Great Gatsby', Category: 'Action' }],
};

const store = createStore(rootReducer, {
  bookupdateReducer: initstate,
});

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
