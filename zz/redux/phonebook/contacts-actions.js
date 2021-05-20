import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactFailure = createAction('contacts/addContactError');

const changeFilter = createAction('contacts/changeFilter');
const deleteContact = createAction('contacts/Delete');

export default {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  deleteContact,
  changeFilter,
};
