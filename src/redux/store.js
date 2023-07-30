import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/ContactsSlice';
import { filterReducer } from '../redux/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
