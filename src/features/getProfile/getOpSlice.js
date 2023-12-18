import { createSlice } from "@reduxjs/toolkit";
import { getOrganizationProfile } from "./getOrgpService";

const initialState = {
  getOp: [],
  loading: false,
  error: null,
};

export const getOpSlice = createSlice({
  name: "getOrgProfile",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrganizationProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.getOp = action.payload;
      })
      .addCase(getOrganizationProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getOpSlice.reducer;
