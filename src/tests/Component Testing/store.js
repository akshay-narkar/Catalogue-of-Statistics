import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../Reducers/index';

const initstate = {
  teams: [],
  teaminfo: [],
};

const store = createStore(rootReducer, {
  teamupdatereducer: initstate,
  teamdeetsReducer: initstate,
}, applyMiddleware(thunk));

export default store;
