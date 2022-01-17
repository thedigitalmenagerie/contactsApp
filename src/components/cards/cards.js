/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Container,
  Right,
} from './cardsElements';
import SingleCard from './singleCard';

const Cards = ({
  id,
  name,
  phone,
  notes,
  email,
  contacts,
  setContacts
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    if (showDetail === false) {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };
  return (
    <Container>
      <Card key={id}>
        <Button onClick={handleClick}>{name}</Button>
      </Card>
      <Right>
      {showDetail === true
        ? <SingleCard
            contacts={contacts}
            setContacts={setContacts}
            showDetail={showDetail}
            id={id}
            key={id}
            phone={phone}
            notes={notes}
            email={email}
            name={name}
          />
        : <div></div>
      }
      </Right>
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
