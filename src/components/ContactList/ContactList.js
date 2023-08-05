import css from './ContacList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import React from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <ul className={css.contact__list}>
      {filtered.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
            className={css.button__delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
