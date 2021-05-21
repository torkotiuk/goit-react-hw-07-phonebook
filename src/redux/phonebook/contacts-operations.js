import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  delContactRequest,
  delContactSuccess,
  delContactFailure,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('http://localhost:3000/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsFailure(error));
  }
};

const addContact = values => dispatch => {
  const contact = {
    name: values.name,
    number: values.number,
  };
  dispatch(addContactRequest());
  axios
    .post('http://localhost:3000/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactFailure(err)));
};

const deleteContact = contactId => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`http://localhost:3000/contacts/${contactId}`)
    .then(() => dispatch(delContactSuccess(contactId)))
    .catch(err => dispatch(delContactFailure(err)));
};

export default { fetchContacts, addContact, deleteContact };
