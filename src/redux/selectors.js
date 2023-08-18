import { createSelector } from 'reselect';

export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectContactsFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  selectUserContacts,
  selectContactsFilter,
  (contacts, filter) => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
