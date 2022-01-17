import axios from 'axios';

const APIUrl = 'https://address-book-api-demo.herokuapp.com/api/contacts';

const getContacts = () => new Promise((resolve, reject) => {
  axios.get(`${APIUrl}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getContact = (id) => new Promise((resolve, reject) => {
  axios.get(`${APIUrl}/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateContact = (id, contact) => new Promise((resolve, reject) => {
  axios.put(`${APIUrl}/${id}`, contact)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getContacts, getContact, updateContact };
