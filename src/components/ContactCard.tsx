import React from "react";
import user_logo from "../assets/user_logo.jpg";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/features/contacts/ContactSlice";
import { useDispatch } from "react-redux";
import { ContactCardProps } from "../types/ItemType";

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const dispatch = useDispatch();

  // Function to handle contact deletion
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const fields = [
    { label: "First Name", value: contact.firstName },
    { label: "Last Name", value: contact.lastName },
    { label: "Email", value: contact.email },
    { label: "Status", value: contact.status },
  ];

  return (
    // Contact card container
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-[260px] h-[400px]">
        <div className="photo-wrapper p-4">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={`${user_logo}`}
            alt={`${contact.firstName} ${contact.lastName}`}
          />
        </div>
        <div className="p-4">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {`${contact.firstName} ${contact.lastName}`}
          </h3>
          <table className="text-xs my-4 w-full">
            <tbody>
              {fields.map((field, index) => (
                <tr key={index}>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    {field.label}
                  </td>
                  <td
                    className="px-2 py-2 text-gray-900 max-w-[100px]"
                    style={{ wordWrap: "break-word" }}
                  >
                    {field.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex text-center justify-center gap-6">
            <Link
              to={`/updateContact/${contact.id}`}
              className="text-sm text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
            >
              Update
            </Link>
            <button
              className="text-sm text-red-500 italic hover:underline hover:text-indigo-600 font-medium"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
