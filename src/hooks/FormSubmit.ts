import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleFormSubmit as submitForm } from "../services/ValidateForm";

const FormSubmit = (status: string, contactId?: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Call the submitForm function from ValidateForm service
    submitForm(e, dispatch, navigate, status, contactId);
  };

  return { handleFormSubmit };
};

export default FormSubmit;
