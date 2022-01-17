import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cards from '../components/cards/cards';
import { getContacts } from '../helpers/data/contactsData';
import './App.scss';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((resp) => setContacts(resp));
  }, []);
  return (
    <div className='App'>
      {contacts?.map((contact) => (
        <Cards
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          notes={contact.notes}
          email={contact.email}
          contacts={contacts}
          setContacts={setContacts}
        />
      ))}
    </div>
  );
}

App.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  notes: PropTypes.string,
  phone: PropTypes.string,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};

export default App;
