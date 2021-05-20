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
  changeFilter,
} from './contacts-actions';
// axios.default.baseURL = 'http://localhost:3000';

// fetch
// axios.get('/contacts').then(r => r.data);
const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(err => dispatch(fetchContactsFailure(err)));
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
