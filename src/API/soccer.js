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
        dispatch(allTeams(result1));
      });
  } catch (e) {
    console.log(`${e} nothing found`);
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
        dispatch(result1);
      });
  } catch (e) {
    console.log(`${e} nothing found`);
  }
}

export { apicall, teamcall };
// async function soccer() {
//             cityname.textContent = 'Fetching Data....';
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

//             const response = await fetch(url);
//             // if HTTP-status is 200-299
//             // get the response body (the method explained below)
//             if (response.ok) {
//                 json1 = await response.json();
//                 const { icon } = json1.weather[0];
//                 const iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//                 const jsonimage = await fetch(iconurl);
//                 if (jsonimage.ok) {
//                 displaydata(json1, jsonimage.url);
//                 } else {
//                 nodata('City not found');
//                 }
//             } else {
//                 nodata('City not found');
//             }
//             weatherdata.value = '';
// }
// }
