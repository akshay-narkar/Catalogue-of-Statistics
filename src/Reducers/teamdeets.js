import { TEAM_DEETS } from '../Actions';

const teamdeetsReducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case TEAM_DEETS:
      statenew.teaminfo = [...statenew.teams, action.details];
      return statenew;
    default:
      return state;
  }
};

export default teamdeetsReducer;
