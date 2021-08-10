import configureStore from 'redux-mock-store';
import {
  allTeams, teamdeets, changeFilter, namechangefilter,
} from '../Actions/index';

const mockStore = configureStore();
const store = mockStore();

describe('Test All actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  describe('Test all teams', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          teams: 1,
          type: 'ALL_TEAMS',
        },
      ];

      const unexpectedActions = [
        {
          teams: 2,
          type: 'ALL_TEAMS',
        },
      ];

      store.dispatch(allTeams(1));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test Team deets', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          team: 4,
          type: 'TEAM_DEETS',
        },
      ];

      const unexpectedActions = [
        {
          teams: 2,
          type: 'ALL_TEAMS',
        },
      ];

      store.dispatch(teamdeets(4));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test Change Filter', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          category: 'England',
          type: 'CHANGE_FILTER',
        },
      ];

      const unexpectedActions = [
        {
          teams: 2,
          type: 'ALL_TEAMS',
        },
      ];

      store.dispatch(changeFilter('England'));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test Name Change Filter', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          text: 'ABC',
          type: 'NAME_CHANGE_FILTER',
        },
      ];

      const unexpectedActions = [
        {
          teams: 2,
          type: 'ALL_TEAMS',
        },
      ];
      store.dispatch(namechangefilter('ABC'));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });
});
