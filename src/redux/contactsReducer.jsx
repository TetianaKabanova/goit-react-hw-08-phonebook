import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
} from './contactsOperations';

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(requestContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        // state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        // const indexDeletedContact = state.contacts.findIndex(
        //   contact => contact.id === action.payload.id
        // );
        // state.contacts.splice(indexDeletedContact, 1);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = contactsSlice.actions;
export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectContactsFilter = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
