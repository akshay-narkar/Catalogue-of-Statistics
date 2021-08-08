import PropTypes from 'prop-types';

export default function AllTeams(props) {
  const { newteams } = props;

  const width = {
    width: '85px',
  };

  const maxwidth = {
    width: '310px',
  };

  return (
    <div className="d-flex flex-wrap container m-auto justify-content-center border">
      {newteams.length === 0 ? ('Loading...') : newteams.map((x) => (
        <div id={x.id} key={Math.random()} style={maxwidth} className="d-flex align-items-center justify-content-left py-3 ps-5 border">
          <img src={x.crestUrl} style={width} alt="LogoHere" />
          <p className="ps-2">{x.name}</p>
        </div>
      ))}
    </div>
  );
}

AllTeams.propTypes = {
  newteams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
