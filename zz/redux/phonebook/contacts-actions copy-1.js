// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
axios.default.baseURL = 'http://localhost:3000';

const addContact = values => dispatch => {
  const contact = {
    name: values.name,
    number: values.number,
  };

  dispatch({ type: 'contacts/addContactRequest' });

  axios
    .post('http://localhost:3000/contacts', contact)
    .then(({ data }) =>
      dispatch({
        type: 'contacts/addContactSuccess',
        payload: data,
      }),
    )
    .catch(err => dispatch({ type: 'contacts/addContactError', payload: err }));
};

const changeFilter = createAction('contacts/changeFilter');
const deleteContact = createAction('contacts/Delete');
// const addContact = createAction('contacts/Add', value => ({
//   payload: {
//     id: shortid.generate(),
//     ...value,
//   },
// }));

export default { addContact, deleteContact, changeFilter };
