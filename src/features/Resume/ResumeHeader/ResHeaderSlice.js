import { createSlice } from "@reduxjs/toolkit";
import { getResumeHeader } from "./ResHeaderGetService";

const initialState = {
  getResHeader: [],
  loading: false,
  error: null,
};

export const getResHeaderSlice = createSlice({
  name: "getResHeader",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResumeHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(getResumeHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.getResHeader = action.payload;
      })
      .addCase(getResumeHeader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getResHeaderSlice.reducer;
