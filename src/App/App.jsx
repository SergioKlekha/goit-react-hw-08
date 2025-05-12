import React, { useEffect } from 'react';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;