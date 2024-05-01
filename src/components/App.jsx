import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { setFilter } from '../redux/filterSlice';
import { addContact, deleteContact } from '../redux/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectFilter,
  selectError,
} from '../redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import style from './App.module.css';

export const App = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };

  return (
    <section className={style.content}>
      <div className={style.content__container}>
        <h1 className={style.form__title}>Phonebook</h1>
        <ContactForm addContact={handleAddContact} contacts={visibleContacts} />

        <h2 className={style.contact__title}>Contacts</h2>
        <Filter filter={filter} setFilter={handleSetFilter} />
        {isLoading && (
          <b style={{ display: 'block', padding: '0 0 20px 10px' }}>Loading...</b>
        )}
        {error && <b>Error: {error}</b>}
        {visibleContacts && (
          <ContactList
            contacts={visibleContacts}
            deleteContact={handleDeleteContact}
          />
        )}
      </div>
    </section>
  );
};