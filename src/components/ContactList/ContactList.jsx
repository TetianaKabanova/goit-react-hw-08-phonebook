import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/Notification/notifyOptions';
import { deleteContactThunk } from 'redux/contactsOperations';
import { UserDeleteOutlined } from '@ant-design/icons';
import { selectUserContacts } from 'redux/contactsReducer';

export const ContactList = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));

    toast.info(
      `Contact with with name ${contactId.name} has been deleted!`,
      notifyOptions
    );
  };

  return (
    <ContactsList>
      {contacts?.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <DeleteButton
            type="button"
            onClick={() => handleDeleteContact({ id, name })}
          >
            Delete
            <UserDeleteOutlined />
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};
