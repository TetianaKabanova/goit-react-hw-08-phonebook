import {
  Form,
  Label,
  Input,
  SubmitButton,
  Wrapper,
  Icon,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/Notification/notifyOptions';

import { addContactThunk } from 'redux/contactsOperations';
import {
  PhoneOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { selectUserContacts } from 'redux/contactsReducer';

export const ContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const newContactCheck = newContact => {
    return contacts.filter(
      contact => contact.name?.toLowerCase() === newContact.name?.toLowerCase()
    );
  };

  const contactFormSubmitHandler = newContact => {
    if (newContactCheck(newContact).length > 0) {
      toast.error(
        `Contact with name ${newContact.name} already exists!`,
        notifyOptions
      );
      return false;
    } else {
      dispatch(addContactThunk(newContact));
      toast.success(
        `Contact with name ${newContact.name} is added to the contact list!`,
        notifyOptions
      );
      return true;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contactFormSubmitHandler({ name, number })) {
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="name">
          Name <UserOutlined />
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Contact name"
          required
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="number">
          Number <PhoneOutlined />
        </Label>
        <Input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Contact number"
          required
        />
      </Wrapper>
      <SubmitButton type="submit">
        Add contact
        <Icon>
          <UserAddOutlined />
        </Icon>
      </SubmitButton>
    </Form>
  );
};
