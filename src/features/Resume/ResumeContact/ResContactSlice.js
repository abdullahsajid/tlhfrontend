import { createSlice } from "@reduxjs/toolkit";
import { getResumeContact } from "./ResContactGetService";

const initialState = {
  getResContact: [],
  loading: false,
  error: null,
};

export const getResContactSlice = createSlice({
  name: "getResContact",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResumeContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(getResumeContact.fulfilled, (state, action) => {
        state.loading = false;
        state.getResContact = action.payload;
      })
      .addCase(getResumeContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getResContactSlice.reducer;
