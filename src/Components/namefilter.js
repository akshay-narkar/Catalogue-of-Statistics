import React from 'react';
import PropTypes from 'prop-types';

function NameFilter(props) {
  const { clickHandler, filtercat } = props;
  return (
    <div className="ms-5 my-3">
      <label htmlFor="exampleFormControlInput1" className="form-label d-flex align-items-baseline">
        <p className="m-0">Team Name:</p>
        <input type="text" className="form-control text-box ms-2 w-50" value={filtercat} id="exampleFormControlInput1" placeholder="Title" onChange={clickHandler} />
      </label>
    </div>
  );
}

NameFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  filtercat: PropTypes.string.isRequired,
};

export default NameFilter;
