import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/ContactsSlice';
import { filterReducer } from './contacts/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
