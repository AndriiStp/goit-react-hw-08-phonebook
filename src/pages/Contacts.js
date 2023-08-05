import ContactList from 'components/ContactList/ContactList';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import css from './pages.module.css';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.head}>PhoneBook</h1>
      <ContactsForm />
      <h2 className={css.head_1}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
