import { combineReducers } from 'redux';
import filterReducer from './filter';
import teamupdatereducer from './teams';
import teamdeetsReducer from './teamdeets';
import namefilterReducer from './namefilter';

const rootReducer = combineReducers({
  teamupdatereducer, teamdeetsReducer, filterReducer, namefilterReducer,
});

export default rootReducer;
