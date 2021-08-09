import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { teamcall } from '../API/soccer';
import { teamdeets } from '../Actions/index';
import Teamcard from '../Components/teamcard';

function Team(props) {
  const { location, calldispatch, teaminfo } = props;
  const { key } = location.id;
  const [state, setstate] = useState({
    id: null,
  });

  useEffect(() => {
    teamcall(key, calldispatch);
    if (teaminfo.length !== 0) {
      setstate((prevstate) => ({ ...prevstate, id: teaminfo[0].id }));
    }
  }, []);

  return (
    <>
      <div className="container">
        <Link to={{ pathname: '/' }} className="link">
          <button type="button" className="my-2 p-2 btn btn-primary btn-sm">Home</button>
        </Link>
      </div>
      <h1 className="text-center mb-3 pb-3"> Team Details </h1>
      <div className="">
        {(teaminfo.length === 0 || teaminfo[0].id === state.id)
          ? <div className="container m-auto text-center border">Loading... (API might take time. Only 10 Requests/Min)</div> : <Teamcard teaminfo={teaminfo[0]} />}
      </div>
    </>
  );
}

Team.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
  calldispatch: PropTypes.func.isRequired,
  teaminfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(teamdeets(id)),
});

function mapStateToProps(state) {
  const { teaminfo } = state.teamdeetsReducer;
  return ({ teaminfo });
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
