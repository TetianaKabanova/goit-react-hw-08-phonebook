import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
  Icon,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/Notification/notifyOptions';
import { deleteContactThunk } from 'redux/contactsOperations';
import { UserDeleteOutlined } from '@ant-design/icons';
import {
  selectContactsFilter,
  selectUserContacts,
} from 'redux/contactsReducer';

export const ContactList = () => {
  const contacts = useSelector(selectUserContacts);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
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
      {visibleContacts?.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <DeleteButton
            type="button"
            onClick={() => handleDeleteContact({ id, name })}
          >
            Delete
            <Icon>
              <UserDeleteOutlined />
            </Icon>
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};
