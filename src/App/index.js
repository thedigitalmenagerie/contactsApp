import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../helpers/routes';
import { getContacts } from '../helpers/data/contactsData';
import Cards from '../components/cards/cards';
import './App.scss';

const styleObj = {
  color: '#000000',
  fontWeight: 'bold',
  fontSize: 'xx-large'
};

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((resp) => setContacts(resp));
  }, []);
  return (
    <div className='App'>
      <Router>
        <div className='Left'>
          <Link to="/" style={styleObj}>CONTACTS</Link>
        {contacts?.map((contact) => (
          <Cards
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            notes={contact.notes}
            contacts={contacts}
            setContacts={setContacts}
          />
        ))}
        </div>
        <div className='Right'>
        <Routes
          contacts={contacts}
          setContacts={setContacts}
        />
        </div>
      </Router>
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
