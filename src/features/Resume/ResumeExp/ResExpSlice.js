import { createSlice } from "@reduxjs/toolkit";
import { getResumeExp } from "./ResExpGetService";

const initialState = {
  getResExp: [],
  loading: false,
  error: null,
};

export const getResExpSlice = createSlice({
  name: "getResExp",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResumeExp.pending, (state) => {
        state.loading = true;
      })
      .addCase(getResumeExp.fulfilled, (state, action) => {
        state.loading = false;
        state.getResExp = action.payload;
      })
      .addCase(getResumeExp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getResExpSlice.reducer;
