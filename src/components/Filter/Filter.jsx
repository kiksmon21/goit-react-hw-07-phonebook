import React from 'react';
import PropTypes from 'prop-types';

import style from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => setFilter(e.target.value);

  return (
    <div className={style.filter}>
      <input
        type="text"
        name="filter"
        className={style.filter__input}
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};