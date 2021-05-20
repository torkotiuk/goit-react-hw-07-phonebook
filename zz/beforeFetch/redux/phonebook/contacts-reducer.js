import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  delContactRequest,
  delContactSuccess,
  delContactFailure,
  changeFilter,
} from './contacts-actions';
// console.log(actions);

const items = createReducer([], {
  // 'contacts/addContactSuccess': (state, { payload }) => [...state, payload],
  [addContactSuccess]: (state, action) => [...state, action.payload],
  // [actions.addContact]: (state, action) => [...state, action.payload],
  [delContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactFailure]: () => false,
  [delContactRequest]: () => true,
  [delContactSuccess]: () => false,
  [delContactFailure]: () => false,
});

export default combineReducers({ items, filter, loading });
