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
      <div className="d-flex flex-wrap container p-0 m-auto justify-content-center border">
        {newteams.length === 0 ? <h5>Loading... (API might take time. Only 10 Requests/Min)</h5>
          : newteams.map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <AllTeams x={x} />
            </div>
          ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  const { teams } = state.teamupdatereducer;
  const { filter } = state.filterReducer;
  const { namefilter } = state.namefilterReducer;
  return ({ teams, filter, namefilter });
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
