import { createSlice } from "@reduxjs/toolkit";
import { getResumeEdu } from "./ResEduGetService";

const initialState = {
  getResEdu: [],
  loading: false,
  error: null,
};

export const getResEduSlice = createSlice({
  name: "getResEdu",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResumeEdu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getResumeEdu.fulfilled, (state, action) => {
        state.loading = false;
        state.getResEdu = action.payload;
      })
      .addCase(getResumeEdu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getResEduSlice.reducer;
