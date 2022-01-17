/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardElements,
  Button,
  Modal
} from './singleCardElements';
import EditContactForm from '../forms';

const SingleCard = ({
  id,
  name,
  email,
  notes,
  phone,
  contacts,
  setContacts
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      { modalIsOpen === true
        ? <Modal isopen={modalIsOpen}>
            <Button onClick={closeModal}>Close Modal</Button>
            <EditContactForm
              id={id}
              name={name}
              phone={phone}
              email={email}
              notes={notes}
              contacts={contacts}
              setContacts={setContacts}
            />
          </Modal>
        : <Card key={id}>
           <CardElements>Name:</CardElements>
           <CardElements>{name}</CardElements>
           <CardElements>Phone:</CardElements>
           <CardElements>{phone}</CardElements>
           <CardElements>Email:</CardElements>
           <CardElements>{email}</CardElements>
           <CardElements>Notes:</CardElements>
           <CardElements>{notes}</CardElements>
           <Button onClick={openModal}>Edit</Button>
          </Card>
      }
    </div>
  );
};

SingleCard.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  notes: PropTypes.string,
  phone: PropTypes.string,
  showDetail: PropTypes.bool,
  contacts: PropTypes.array,
  setContacts: PropTypes.func
};

export default SingleCard;
