import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addContact } from "../services/api";

export const submitContact = createAsyncThunk(
  "contacts/submitContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await addContact(contactData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = "failed";
        console.error(action.payload);
      });
  },
});

export default contactSlice.reducer;
