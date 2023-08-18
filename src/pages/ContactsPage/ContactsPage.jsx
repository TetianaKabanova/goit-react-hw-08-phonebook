import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import { requestContactsThunk } from 'redux/contactsOperations';
import { Container } from './ContactsPage.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contactsReducer';
import { Spin } from 'antd';
import { notifyOptions } from 'components/Notification/notifyOptions';
import { errorMessage } from 'components/Notification/Notification';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <ToastContainer />
      <Section title="Contacts">
        {isLoading && <Spin />}
        {error && toast.error(`${errorMessage}`, notifyOptions)}
        <Filter title="Find contact by name" />
        <ContactList />
      </Section>
      <ToastContainer />
    </Container>
  );
};

export default ContactsPage;
