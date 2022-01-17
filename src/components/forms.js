import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContact, updateContact } from '../helpers/data/contactsData';
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
  closeModal,
  setSingleCard
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
    updateContact(toEdit.id, toEdit).then(() => getContact(toEdit.id).then((response) => setSingleCard(response)));
    closeModal();
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
        UPDATE
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
  setSingleCard: PropTypes.func,
  closeModal: PropTypes.func,
};
