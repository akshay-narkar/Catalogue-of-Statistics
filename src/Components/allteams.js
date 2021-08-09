import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AllTeams(props) {
  const { x } = props;

  const width = {
    width: '85px',
  };

  const maxwidth = {
    width: '310px',
  };

  return (
    <>
      {/* <Link to={{ pathname: '/foo', query: { the: 'query' } }}/> */}
      {/* className="border d-flex align-items-center justify-content-center py-4 link" */}
      <Link to={{ pathname: '/team', id: { key: x.id } }} className="link">
        <div id={x.id} style={maxwidth} className="d-flex align-items-center justify-content-start px-5">
          <img src={x.crestUrl} style={width} alt="LogoHere" />
          <div>
            <p className="ms-3 fw-bold">{x.name}</p>
            <p className="ms-3 fw-light">{x.area.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

AllTeams.propTypes = {
  x: PropTypes.shape({
    id: PropTypes.number.isRequired,
    area: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
    crestUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
  // x: PropTypes.objectOf(PropTypes.number).isRequired,
};

AllTeams.defaultProps = {
  x: PropTypes.shape({
    crestUrl: null,
  }),

};
