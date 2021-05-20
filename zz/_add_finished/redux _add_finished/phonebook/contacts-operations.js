import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  deleteContact,
  changeFilter,
} from './contacts-actions';
// axios.default.baseURL = 'http://localhost:3000';

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

export default { addContact };
