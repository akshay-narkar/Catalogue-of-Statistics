import PropTypes from 'prop-types';
import Squadlist from './squadlist';

export default function Teamcard(props) {
  const { teaminfo } = props;

  const maxwidth = {
    width: '175px',
    padding: 15,
  };

  const maxwidthname = {
    width: '300px',
    padding: 15,
  };

  return (
    <>
      <div className="container">
        <div className="row border align-items-center">
          <div className="col-lg-3 p-0 text-center">
            <img src={teaminfo.crestUrl} style={maxwidth} alt="logo" />
          </div>
          <div className="col-lg-9 container align-items-center">
            <div className="row p-0 border">
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Name: </span>
                {teaminfo.name}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Country:  </span>
                {teaminfo.area.name}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Shortname:  </span>
                {teaminfo.shortName}
              </h5>
            </div>
            <div className="p-0 row  border">
              <h5 className="px-4 py-4 mb-0 border">
                <span>Address:  </span>
                {teaminfo.address}
              </h5>
            </div>
            <div className="row p-0 border">
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Founded: </span>
                {teaminfo.founded}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Kits: </span>
                {teaminfo.clubColors}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Venue: </span>
                {teaminfo.venue}
              </h5>
            </div>
            <div className="row p-0 border">
              <h5 className="px-4 py-4 mb-0 col-md-6 border text-break">
                <span>Website: </span>
                <a href={teaminfo.website}>{teaminfo.website}</a>
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-6 border text-break">
                <span>Email: </span>
                {teaminfo.email}
              </h5>
            </div>
            <div className="row p-0 border">
              <h5 className="px-4 py-4 mb-0 col-md-6 border">
                <span>League: </span>
                {teaminfo.activeCompetitions[0].name}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-6 border">
                <span>Contact: </span>
                {teaminfo.phone}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <div>
          <h1 className=" mt-5 mb-4 text-center text-decoration-underline">SQUAD LIST</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center container m-auto border p-0">
          {teaminfo.squad.map((player) => (<div key={Math.random()} className="border d-flex align-items-center py-4" style={maxwidthname}><Squadlist playerinfo={player} /></div>))}
        </div>
        <div />
      </div>
    </>
  );
}

Teamcard.propTypes = {
  teaminfo: PropTypes.shape({
    founded: PropTypes.number,
    name: PropTypes.string,
    shortName: PropTypes.string,
    crestUrl: PropTypes.string,
    nationality: PropTypes.string,
    role: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    venue: PropTypes.string,
    clubColors: PropTypes.string,
    phone: PropTypes.string,
    activeCompetitions: PropTypes.arrayOf(PropTypes.object),
    squad: PropTypes.arrayOf(PropTypes.object),
    area: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  }),
};

Teamcard.defaultProps = {
  teaminfo: PropTypes.shape({
    founded: 2020,
    name: '',
    shortName: '',
    crestUrl: '',
    nationality: '',
    role: '',
    website: '',
    email: '',
    address: '',
    venue: '',
    clubColors: '',
    phone: '',
    activeCompetitions: [{}],
    squad: [{}],
    area: PropTypes.shape({
      name: '',
      id: 1,
    }),
  }),
};
