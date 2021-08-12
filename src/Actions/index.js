const ALL_TEAMS = 'ALL_TEAMS';
const TEAM_DEETS = 'TEAM_DEETS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const NAME_CHANGE_FILTER = 'NAME_CHANGE_FILTER';

function allTeams(teams) {
  return ({
    type: ALL_TEAMS,
    teams,
  });
}

const teamdeets = (team) => ({
  type: TEAM_DEETS,
  team,
});

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  category,
});

const namechangefilter = (text) => ({
  type: NAME_CHANGE_FILTER,
  text,
});

export {
  allTeams, teamdeets, ALL_TEAMS, TEAM_DEETS, changeFilter,
  NAME_CHANGE_FILTER, namechangefilter, CHANGE_FILTER,
};
