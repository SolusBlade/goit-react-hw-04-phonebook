import {  useEffect, useState, useMemo, useCallback } from 'react';

import ContactList from './ContactList/ContactList';
import contactsList from '../data/contacts.json';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || contactsList);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = useCallback(contact => {
    setContacts(p => [...p, contact]);
  },[]);
  
  const removeContact = useCallback(id => {
    setContacts(p => p.filter(el => el.id !== id));
  },[]);

  const changeFilter = useCallback(e => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  },[]);

  const filterContactsList = useMemo(() => {
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  }, [contacts, filter]);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={addContact}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} />
        <ContactList
          filteredContacts={filterContactsList}
          contacts={contacts}
          removeContact={removeContact}
        />
      </div>
    );
}

export default App;
