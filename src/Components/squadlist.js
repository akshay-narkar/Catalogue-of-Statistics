import PropTypes from 'prop-types';

export default function Squadlist(props) {
  const { playerinfo } = props;
  let dob = playerinfo.dateOfBirth;
  if (dob !== null) {
    dob = playerinfo.dateOfBirth.slice(0, 10);
  }
  return (
    <>
      <div>
        <p className="ms-3 fw-light">
          Name :
          <span> </span>
          <span className="fw-bold">{playerinfo.name}</span>
        </p>
        <p className="ms-3 fw-light">
          Position :
          <span> </span>

          <span className="fw-bold">
            {' '}
            { playerinfo.position}
            {' '}
          </span>
        </p>
        <p className="ms-3 fw-light">
          Nationality:
          {' '}
          <span> </span>

          <span className="fw-bold">
            {' '}
            {playerinfo.nationality}
          </span>

        </p>
        <p className="ms-3 fw-light">
          Birth Date:
          {' '}
          <span> </span>

          <span className="fw-bold">
            {' '}
            {dob}
          </span>

        </p>
        <p className="ms-3 fw-light">
          No:
          {' '}
          <span> </span>

          <span className="fw-bold">
            {' '}
            {playerinfo.shirtNumber}
          </span>

        </p>
        <p className="ms-3 fw-light">
          Role:
          {' '}
          <span> </span>

          <span className="fw-bold">
            {' '}
            {playerinfo.role}
          </span>

        </p>
      </div>
    </>
  );
}

Squadlist.propTypes = {
  playerinfo: PropTypes.shape({
    id: PropTypes.number,
    shirtNumber: PropTypes.number,
    position: PropTypes.string,
    name: PropTypes.string,
    dateOfBirth: PropTypes.string,
    nationality: PropTypes.string,
    role: PropTypes.string,
  }),
};

Squadlist.defaultProps = {
  playerinfo: PropTypes.shape({
    id: 1,
    shirtNumber: 1,
    position: '',
    name: '',
    dateOfBirth: '',
    nationality: '',
    role: '',
  }),
};
