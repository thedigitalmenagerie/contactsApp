import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SingleCard from '../components/cards/singleCard';

function Routes({ contacts, setContacts }) {
  return (
    <div>
      <Switch>
      <Route
          exact
          path='/'
        />
      <Route
          exact
          path='/:id'
          component={() => (
            <SingleCard
              contacts={contacts}
              setContacts={setContacts}
            />
          )}
          contacts={contacts}
          setContacts={setContacts}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  notes: PropTypes.string,
  phone: PropTypes.string,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};

export default Routes;
