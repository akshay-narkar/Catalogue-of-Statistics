import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../Components/filter';
import { changeFilter, namechangefilter } from '../Actions/index';
import NameFilter from '../Components/namefilter';
import AllTeams from '../Components/allteams';

function Homepage(props) {
  const [state, setstate] = useState({
    toggle: 1,
  });

  const { toggle } = state;

  const {
    teams, filtercat, filter, namefilter, namefiltercat,
  } = props;

  let newteams;

  const handleFilterChange = (event) => {
    setstate({ toggle: 1 });
    filtercat(event.target.value);
  };

  const namehandleFilterChange = (event) => {
    if (event.target.value !== '')setstate({ toggle: 2 });
    else { setstate({ toggle: 1 }); }

    namefiltercat(event.target.value);
  };

  const filterdata = (teams, filter) => {
    if (toggle === 1) {
      if (filter === 'All') {
        return teams[0].teams;
      }

      return teams[0].teams.filter((xmas) => xmas.area.name === filter);
    }
    const re = new RegExp(namefilter, 'i');
    return teams[0].teams.filter((xmas) => xmas.name.match(re));
  };

  if (teams.length !== 0) { newteams = filterdata(teams, filter); } else {
    newteams = teams;
  }

  return (
    <>
      <h1 className="text-center my-2 py-3">The Football Catalogue</h1>
      <div className="container">
        <div className="row my-4">
          <div className="col-md">
            <CategoryFilter
              filtercat={filter}
              clickHandler={handleFilterChange}
            />
          </div>
          <div className="col-md">
            <NameFilter
              filtercat={namefilter}
              clickHandler={namehandleFilterChange}
            />
          </div>
        </div>
      </div>
      {/* <h1>{teams}</h1> */}
      {/* {console.log(teams)} */}
      {/* {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)} */}
      {/* {teams.length === 0 ? ('Loading...') :
         (teams[0].teams.forEach((xyz) => <p>{ xyz.name }</p>))} */}
      {/* {teams.length === 0 ? ('Loading...') : console.log(teams[0].teams[0]) } */}
      {/* <AllTeams newteams={newteams} /> */}
      <div className="d-flex flex-wrap container p-0 m-auto justify-content-center border">
        {newteams.length === 0 ? <h5>Loading... (API might take time. Only 10 Requests/Min)</h5>
          : newteams.map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center py-4">
              <AllTeams x={x} />
              {/* // <div id={x.id} key={Math.random()} style={maxwidth} className="
          // d-flex align-items-center justify-content-left py-3 ps-5 border">
          //   <img src={x.crestUrl} style={width} alt="x" />
          //   <p className="ps-2">{x.name}</p> */}
            </div>
          ))}
      </div>
      {/* map((x) => <option value={x} key={Math.random()}>{x}</option>)} */}
      {/* {teams.length === 0 ? ('Loading...') :
        teams[0].teams.forEach((xyz) => <p>{ xyz.name }</p>)} */}
    </>
  );
}

function mapStateToProps(state) {
  const { teams } = state.teamupdatereducer;
  const { filter } = state.filterReducer;
  const { namefilter } = state.namefilterReducer;
  return ({ teams, filter, namefilter });
  // return ({ booklist: books, filternew: filter });
}

const mapDispatchToProps = (dispatch) => ({
  filtercat: (category) => dispatch(changeFilter(category)),
  namefiltercat: (category) => dispatch(namechangefilter(category)),

});

Homepage.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  filtercat: PropTypes.func.isRequired,
  namefiltercat: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  namefilter: PropTypes.string.isRequired,
};

Homepage.defaultProps = {
  teams: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
