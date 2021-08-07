import { ALL_TEAMS } from '../Actions';

const teamupdatereducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case ALL_TEAMS:
      statenew.teams = [...statenew.teams, action.teams];
      return statenew;
    default:
      return state;
  }
};

export default teamupdatereducer;
