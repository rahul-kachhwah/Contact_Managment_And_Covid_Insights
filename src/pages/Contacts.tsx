import { Link } from "react-router-dom";
import bgImage from "../assets/bgimg.png";
import ContactCard from "../components/ContactCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/app/Store";
import no_contact from "../assets/no_contact.jpg";

function Contacts() {
  // Retrieve contacts from Redux store
  const contacts = useSelector(
    (state: RootState) => state.contactsReducer.contacts
  );

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center mt-4">
        {/* Button to navigate to contact form */}
        <Link to="/contactform">
          <button
            type="button"
            className="text-white animate-bounce bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-semibold rounded-lg text-lg px-5 py-2.5 text-center mb-2 mt-4"
          >
            Create Contact
          </button>
        </Link>
      </div>

      {/* Display list of contacts in the form of card by passing the data to ConatctCard component*/}
      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full overflow-x-auto p-2 mt-8">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full mb-4">
          <p className="text-2xl text-blue-700 font-semibold text-center bg-white ">
            <img
              src={no_contact}
              alt="No Contacts Found"
              className=" w-72 h-72 mb-4"
            />
            No contacts found !
          </p>
        </div>
      )}
    </div>
  );
}

export default Contacts;
