import {
  ALL_TEAMS, TEAM_DEETS,
  NAME_CHANGE_FILTER, CHANGE_FILTER,
} from '../../Actions/index';

import filterReducer from '../../Reducers/filter';
import teamupdatereducer from '../../Reducers/teams';
import teamdeetsReducer from '../../Reducers/teamdeets';
import namefilterReducer from '../../Reducers/namefilter';

const state = { teams: [] };
const statenew = { teams: [], teaminfo: [] };

describe('Team Update Reducer', () => {
  describe('INITIAL_DUMMY_STATE', () => {
    test('Pass default state', () => {
      const action = { type: 'dummy_action' };
      const initialState = { teams: 0 };

      expect(teamupdatereducer(initialState, action)).toEqual(initialState);
      expect(teamupdatereducer(undefined, action)).not.toEqual(initialState);
    });
  });

  describe('USE THE CORRECT ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: ALL_TEAMS, teams: 1 };
      const expectedState = { teams: [1] };
      const unexpectedState = { teams: [2] };
      expect(teamupdatereducer(state, action)).toEqual(expectedState);
      expect(teamupdatereducer(state, action)).not.toEqual(unexpectedState);
    });
  });
});

describe('Team Deets Reducer', () => {
  describe('USE THE CORRECT ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: TEAM_DEETS, team: 1 };
      const expectedState = { teaminfo: [1], teams: [] };
      const unexpectedState = { teaminfo: [2] };
      expect(teamdeetsReducer(statenew, action)).toEqual(expectedState);
      expect(teamdeetsReducer(statenew, action)).not.toEqual(unexpectedState);
    });
  });
});

describe('Filter Reducer', () => {
  describe('USE THE CORRECT ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: CHANGE_FILTER, category: 'Spain' };
      const expectedState = { filter: 'Spain' };
      const unexpectedState = { filter: 'England' };
      expect(filterReducer({ filter: 'All' }, action)).toEqual(expectedState);
      expect(filterReducer({ filter: 'All' }, action)).not.toEqual(unexpectedState);
    });
  });
});

describe('Name Filter Reducer', () => {
  describe('USE THE CORRECT ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: NAME_CHANGE_FILTER, text: 'Spain' };
      const expectedState = { namefilter: 'Spain' };
      const unexpectedState = { namefilter: 'England' };
      expect(namefilterReducer({ namefilter: 'All' }, action)).toEqual(expectedState);
      expect(namefilterReducer({ namefilter: 'All' }, action)).not.toEqual(unexpectedState);
    });
  });
});
