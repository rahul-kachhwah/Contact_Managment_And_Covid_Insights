import React, { useEffect, useState } from "react";
import { ContactFieldsProps } from "../types/ItemType";

const ContactFields: React.FC<ContactFieldsProps> = ({
  label,
  type,
  placeholder,
  id,
  name,
  validate,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  // Update field value when initialValue changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(validate(newValue));
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md`}
      />
      {/* Error message if validation fails */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ContactFields;
