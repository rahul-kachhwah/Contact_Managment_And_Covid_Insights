import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/ContactSlice";

// Configure Redux store
export const Store = configureStore({
  reducer: {
    contactsReducer: contactsReducer,
  },
});

// Define RootState type for useSelector hook And AppDispatch for useDispatch hook
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
