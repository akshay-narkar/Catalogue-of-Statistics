import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { clickHandler, filtercat } = props;
  const categories = ['Brazil', 'England', 'France', 'Germany', 'Italy', 'Netherlands', 'Portugal', 'Spain'];
  return (

    <div className="ms-5 ">
      <label htmlFor="exampleselectInput1" className="form-label d-flex align-items-baseline m-0">

        <p className="m-0">CATEGORIES:</p>

        <select
          value={filtercat}
          className="form-select ms-2 w-50"
          aria-label="selectcategory"
          onChange={clickHandler}
        >

          <option value="All" defaultValue>All</option>

          {categories.map((x) => (
            <option
              label={x}
              value={x}
              key={Math.random()}
            >
              {x}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  filtercat: PropTypes.string.isRequired,
};

export default CategoryFilter;
