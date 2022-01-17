import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContacts, updateContact } from '../helpers/data/contactsData';
import {
  Form,
  FormTitle,
  Row,
  Input,
  Button,
} from './formElements';

export default function EditContactForm({
  id,
  name,
  phone,
  email,
  notes,
  setContacts
}) {
  const [toEdit, setToEdit] = useState({
    id,
    name,
    phone,
    email,
    notes
  });

  useEffect(() => {
    setToEdit({
      id,
      name,
      phone,
      email,
      notes
    });
  }, [
    id,
    name,
    phone,
    email,
    notes
  ]);

  const handleInputChange = (e) => {
    setToEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(toEdit.id, toEdit).then(() => getContacts().then((response) => setContacts(response)));
  };

  return (
    <Form
      id='Form'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Row>
        <FormTitle className='formTitle'>Name</FormTitle>
        <Input
          name='name'
          type='text'
          value={toEdit.name}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <FormTitle className='formTitle'>Phone</FormTitle>
        <Input
          name='phone'
          type='text'
          value={toEdit.phone}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <FormTitle className='formTitle'>Email</FormTitle>
        <Input
          name='email'
          type='text'
          value={toEdit.email}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <FormTitle className='formTitle'>Notes</FormTitle>
        <Input
          name='notes'
          type='text'
          value={toEdit.notes}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Button className='add' type='submit' onClick={handleSubmit}>
        Update Contact
      </Button>
    </Form>
  );
}

EditContactForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  notes: PropTypes.string,
  setContacts: PropTypes.func,
};
