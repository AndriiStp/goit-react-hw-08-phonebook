// import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContact } from 'redux/contacts/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <div className={css.filter__box}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          placeholder="Enter name to find"
          onChange={handleFilter}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
