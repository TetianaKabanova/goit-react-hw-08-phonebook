import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
} from 'redux/contactsOperations';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectUserContacts,
} from 'redux/contactsReducer';
// import { Container, Wrapper } from './ContactsPage.styled';
// import { ToastContainer } from 'react-toastify';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Section } from 'components/Section/Section';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContactThunk({ name, number }));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  // return (
  //   // <Container>
  //   //   <Section title="Phonebook">
  //   //     <ContactForm />
  //   //   </Section>
  //   //   <ToastContainer />
  //   //   <Section title="Contacts">
  //   //     {contacts.length > 0 ? (
  //   //       <Filter title="Find contact by name" />
  //   //     ) : (
  //   //       <Wrapper>Add contact</Wrapper>
  //   //     )}
  //   //     {isLoading && !error && <b>Request in progress...</b>}
  //   //     {contacts.length > 0 && <ContactList />}
  //   //   </Section>
  //   //   <ToastContainer />
  //   // </Container>
  //   // <Form onSubmit={handleSubmit}>
  //   //   <Wrapper>
  //   //     <Label htmlFor="name">Name</Label>
  //   //     <Input
  //   //       type="text"
  //   //       name="name"
  //   //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //   //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //   //       required
  //   //       value={name}
  //   //       onChange={handleChange}
  //   //     />
  //   //   </Wrapper>

  //   //   <Wrapper>
  //   //     <Label htmlFor="number">Number</Label>
  //   //     <Input
  //   //       type="tel"
  //   //       name="number"
  //   //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //   //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //   //       required
  //   //       value={number}
  //   //       onChange={handleChange}
  //   //     />
  //   //   </Wrapper>

  //   //   <SubmitButton type="submit">Add contact</SubmitButton>
  //   // </Form>
  // );
};

export default ContactsPage;
