/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Container,
  Button,
} from './cardsElements';

const Cards = ({
  id,
  name,
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${id}`);
  };
  return (
    <Container>
      <Card key={id}>
        <Button onClick={handleClick}>{name}</Button>
      </Card>
    </Container>
  );
};

Cards.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  notes: PropTypes.string,
  phone: PropTypes.string,
  showDetail: PropTypes.any,
  setShowDetail: PropTypes.any,
  handleClick: PropTypes.any,
  contacts: PropTypes.array,
  setContacts: PropTypes.func
};

export default Cards;
