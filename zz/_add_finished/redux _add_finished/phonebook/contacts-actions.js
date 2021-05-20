import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactFailure = createAction('contacts/addContactError');

export const changeFilter = createAction('contacts/changeFilter');
export const deleteContact = createAction('contacts/Delete');
