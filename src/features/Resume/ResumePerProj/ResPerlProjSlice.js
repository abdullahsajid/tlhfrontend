import { createSlice } from "@reduxjs/toolkit";
import { getResumePerlProj } from "./ResPerlProjGetService";

const initialState = {
  getResProj: [],
  loading: false,
  error: null,
};

export const getResPersonalProjSlice = createSlice({
  name: "getResProj",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResumePerlProj.pending, (state) => {
        state.loading = true;
      })
      .addCase(getResumePerlProj.fulfilled, (state, action) => {
        state.loading = false;
        state.getResProj = action.payload;
      })
      .addCase(getResumePerlProj.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getResPersonalProjSlice.reducer;
