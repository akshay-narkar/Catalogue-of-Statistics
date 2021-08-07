import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../Components/filter';
import { changeFilter } from '../Actions/index';

function Homepage(props) {
  const {
    teams, filtercat, filter,
  } = props;

  // useEffect(() => {
  //   apicall(addteams);
  // }, []);
  let newteams;

  const handleFilterChange = (event) => {
    filtercat(event.target.value);
  };

  const filterdata = (teams, filter) => {
    if (filter === 'All') return teams[0].teams;
    return teams[0].teams.filter((xmas) => xmas.area.name === filter);
  };

  if (teams.length !== 0) { newteams = filterdata(teams, filter); console.log(newteams); } else {
    newteams = teams;
  }

  return (
    <>
      <h1>This is the homepage</h1>
      <CategoryFilter
        filtercat={filter}
        clickHandler={handleFilterChange}
      />
      {/* <h1>{teams}</h1> */}
      {/* {console.log(teams)} */}
      {/* {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)} */}
      {/* {teams.length === 0 ? ('Loading...') :
         (teams[0].teams.forEach((xyz) => <p>{ xyz.name }</p>))} */}
      {/* {teams.length === 0 ? ('Loading...') : console.log(teams[0].teams[0]) } */}
      {newteams.length === 0 ? ('Loading...') : newteams.map((x) => (
        <p id={x.id} key={Math.random()}>
          {x.name}
          {x.id}
        </p>
      ))}

      {/* map((x) => <option value={x} key={Math.random()}>{x}</option>)} */}
      {/* {teams.length === 0 ? ('Loading...') :
        teams[0].teams.forEach((xyz) => <p>{ xyz.name }</p>)} */}
    </>
  );
}

function mapStateToProps(state) {
  const { teams } = state.teamupdatereducer;
  const { filter } = state.filterReducer;
  return ({ teams, filter });
  // return ({ booklist: books, filternew: filter });
}

const mapDispatchToProps = (dispatch) => ({
  filtercat: (category) => dispatch(changeFilter(category)),
});

Homepage.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  filtercat: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,

  // teams: PropTypes.func,
  // addteams: PropTypes.func,
};

Homepage.defaultProps = {
  teams: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
