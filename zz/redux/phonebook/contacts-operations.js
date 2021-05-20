import axios from 'axios';
import actions from './contacts-actions';
// axios.default.baseURL = 'http://localhost:3000';

const addContact = values => dispatch => {
  const contact = {
    name: values.name,
    number: values.number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post('http://localhost:3000/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(err => dispatch(actions.addContactFailure(err)));
};

export default { addContact };
