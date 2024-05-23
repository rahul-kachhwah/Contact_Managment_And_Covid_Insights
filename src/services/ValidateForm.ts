import { Dispatch } from "redux";
import {
  addContact,
  updateContact,
} from "../redux/features/contacts/ContactSlice";
import { FormValues } from "../types/ItemType";
import { NavigateFunction } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

// Function to validate form data
export const ValidateForm = (formData: FormValues) => {
  const missingFields: string[] = [];
  for (const [key, value] of Object.entries(formData)) {
    if (!value) {
      missingFields.push(key);
    }
  }
  return missingFields;
};

// Function to handle form submission
export const handleFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  dispatch: Dispatch,
  navigate: NavigateFunction,
  status: string,
  contactId?: string
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;

  const missingFields = ValidateForm({ firstName, lastName, email });
  if (missingFields.length > 0) {
    alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
    return;
  }

  // Create new contact object
  const newContact = {
    id: contactId || nanoid(),
    firstName,
    lastName,
    email,
    status,
  };

  if (contactId) {
    dispatch(updateContact(newContact)); // Update contact if contactId is present
  } else {
    dispatch(addContact(newContact)); // Otherwise, add new contact
  }
  navigate("/contacts");
};
