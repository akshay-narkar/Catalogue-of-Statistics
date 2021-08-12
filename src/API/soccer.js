import { allTeams } from '../Actions/index';

const options = {
  method: 'GET',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_KEY,
  },
};

async function apicall(dispatch) {
  let result1;
  const areas = [2072, 2224, 2114, 2088, 2163, 2081, 2187, 2032];
  const url = `https://api.football-data.org/v2/teams?plan=TIER_ONE&areas=${areas}`;
  try {
    await fetch(url, options, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        result1 = response;
      });
    dispatch(allTeams(result1));
  } catch (e) {
    // emptyblock
    // alert(`${e} - API failed to fetch`);
  }
}

async function teamcall(key, dispatch) {
  let result1;
  const id = key;
  const url = `https://api.football-data.org/v2/teams/${id}`;
  try {
    await fetch(url, options, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        result1 = response;
      });
    dispatch(result1);
  } catch (e) {
    // emptyblock
    // alert(`${e} - API failed to fetch`);
  }
}

export { apicall, teamcall };
