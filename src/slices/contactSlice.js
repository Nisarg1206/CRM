import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  loading: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    updateContact(state, action) {
      const index = state.contacts.findIndex((c) => c.id === action.payload.id);
      if (index >= 0) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setContacts,
  addContact,
  updateContact,
  deleteContact,
  setLoading,
} = contactSlice.actions;

export default contactSlice.reducer;