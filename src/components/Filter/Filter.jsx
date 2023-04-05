import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { memo } from 'react';

const Filter = ({ changeFilter }) => {

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        onChange={changeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default memo(Filter);
