import { combineReducers } from 'redux';
import filterReducer from './filter';
import teamupdatereducer from './teams';
import teamdeetsReducer from './teamdeets';

const rootReducer = combineReducers({ teamupdatereducer, teamdeetsReducer, filterReducer });

export default rootReducer;
