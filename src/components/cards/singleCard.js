/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardElements,
  Button,
  Modal,
  Title,
  CardElementsTitle,
} from './singleCardElements';
import EditContactForm from '../forms';
import { getContact } from '../../helpers/data/contactsData';

const SingleCard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [singleCard, setSingleCard] = useState({});
  const { id } = useParams();
  console.warn(singleCard);

  useEffect(() => {
    let mounted = true;
    getContact(id).then(setSingleCard);
    return () => {
      mounted = false;
      return mounted;
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      { modalIsOpen === true
        ? <Modal>
            <Button onClick={closeModal}>CLOSE</Button>
            <EditContactForm
              id={singleCard.id}
              name={singleCard.name}
              phone={singleCard.phone}
              email={singleCard.email}
              notes={singleCard.notes}
              contacts={singleCard.contacts}
              setContacts={singleCard.setContacts}
              closeModal={closeModal}
              setSingleCard={setSingleCard}
            />
          </Modal>
        : <Card key={id}>
          <Title>{singleCard.name}</Title>
           <CardElementsTitle>Name:</CardElementsTitle>
           <CardElements>{singleCard.name}</CardElements>
           <CardElementsTitle>Phone:</CardElementsTitle>
           <CardElements>{singleCard.phone}</CardElements>
           <CardElementsTitle>Email:</CardElementsTitle>
           <CardElements>{singleCard.email}</CardElements>
           <CardElementsTitle>Notes:</CardElementsTitle>
           <CardElements>{singleCard.notes}</CardElements>
           <Button onClick={openModal}>EDIT</Button>
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
  setContacts: PropTypes.func,
  setSingleCard: PropTypes.func
};

export default SingleCard;
