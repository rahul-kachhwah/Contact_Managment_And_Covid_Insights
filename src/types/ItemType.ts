// Define item types for drag and drop functionality
export const ItemTypes = {
  SIDEBAR: "sidebar",
};

// Define interface for a contact
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}

// Define interface for contacts state
export interface ContactsState {
  contacts: Contact[];
}

// Define interface for form values
export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

// Define interface for props of contact fields component
export interface ContactFieldsProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  validate: (value: string) => string | null;
  initialValue?: string;
}

// Define interface for props of list component
export interface ListProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

// Define interface for props of dropdown component
export interface DropdownProps {
  status: string;
  setStatus: (status: string) => void;
}

// Define interface for props of contact card component
export interface ContactCardProps {
  contact: Contact;
}

// Define interface for props of line graph component
export interface LineGraphProps {
  data: {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
  };
}

// Define interfaces for country info and country data
export interface CountryInfo {
  _id: number;
  lat: number;
  long: number;
  flag: string;
}

export interface CountryData {
  country: string;
  countryInfo: CountryInfo;
  active: number;
  recovered: number;
  deaths: number;
}

// Define props interface for Map component
export interface MapProps {
  countriesData: CountryData[]; // Array of country data
}