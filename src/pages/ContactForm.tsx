import React, { useState } from "react";
import { nanoid } from "nanoid";
import bgImage from "../assets/bgimg.png";
import { useParams } from "react-router-dom";
import ValidateName from "../services/ValidateName";
import ValidateEmail from "../services/ValidateEmail";
import Dropdown from "../components/Dropdown";
import ContactFields from "../components/ContactFields";
import FormSubmit from "../hooks/FormSubmit";
import { useSelector } from "react-redux";
import { RootState } from "../redux/app/Store";

const ContactForm: React.FC = () => {
  // Initialize state for contact status and retrieve contactId from route parameters
  const [status, setStatus] = useState("Active");
  const { contactId } = useParams<{ contactId: string }>();

  // Call FormSubmit hook to handle form submission
  const { handleFormSubmit } = FormSubmit(status, contactId);

  // Retrieve contact details from the Redux store based on contactId
  const contact = useSelector((state: RootState) =>
    contactId
      ? state.contactsReducer.contacts.find(
          (contact) => contact.id === contactId
        )
      : null
  );

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="my-6 mx-auto p-6 w-full max-w-md bg-white font-[sans-serif] rounded-lg shadow-lg">
        <h1 className="text-3xl text-[#333] font-extrabold text-center">
          {contactId ? "Update Contact" : "Create Contact"}
        </h1>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <ContactFields
            label="First Name"
            type="text"
            placeholder="First Name"
            id={nanoid()}
            name="firstName"
            validate={ValidateName}
            initialValue={contact ? contact.firstName : ""}
          />
          <ContactFields
            label="Last Name"
            type="text"
            placeholder="Last Name"
            id={nanoid()}
            name="lastName"
            validate={ValidateName}
            initialValue={contact ? contact.lastName : ""}
          />
          <ContactFields
            label="Email"
            type="email"
            placeholder="Email"
            id={nanoid()}
            name="email"
            validate={ValidateEmail}
            initialValue={contact ? contact.email : ""}
          />

          {/* Call Dropdown component for contact status */}
          <Dropdown status="Active" setStatus={setStatus} />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-blue-600"
          >
            {contactId ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
