// import { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/fetching';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <b>Please wait, Request in progress...</b>}
      <h1 className={css.header}>PhoneBook</h1>
      <Form />
      <h2 className={css.header}>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
