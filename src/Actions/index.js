const ALL_TEAMS = 'ALL_TEAMS';
const TEAM_DEETS = 'TEAM_DEETS';
const CHANGE_FILTER = 'CHANGE_FILTER';

function allTeams(teams) {
  return ({
    type: ALL_TEAMS,
    teams,
  });
}

const teamdeets = (index) => ({
  type: TEAM_DEETS,
  index,
});

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  category,
});

export {
  allTeams, teamdeets, ALL_TEAMS, TEAM_DEETS, changeFilter, CHANGE_FILTER,
};
