import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
// console.log(actions);

const items = createReducer([], {
  // 'contacts/addContactSuccess': (state, { payload }) => [...state, payload],
  addContactSuccess: (state, action) => [...state, action.payload],
  // [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });
