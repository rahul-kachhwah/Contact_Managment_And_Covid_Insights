import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactsState } from "../../../types/ItemType";

// Define initial state for contacts
const initialState: ContactsState = {
  contacts: [],
};

const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // Reducer to add a new contact
    addContact(state, action: PayloadAction<Contact>) {
      const existingContact = state.contacts.find(
        (contact) => contact.email === action.payload.email
      );
      if (existingContact) {
        // Contact already exists, display error message
        alert("Contact already exists!");
      } else {
        state.contacts.push(action.payload);
      }
    },
    // Reducer to update an existing contact
    updateContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    // Reducer to delete a contact
    deleteContact(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  ContactSlice.actions;
export default ContactSlice.reducer;
