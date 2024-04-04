import { createSlice } from "@reduxjs/toolkit";
import { resSkillApi } from "./ResSkillApis";

const initialState = {
  getResSkill: [],
  loading: false,
  error: null,
};

export const getResSkillSlice = createSlice({
  name: "getResSkill",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(resSkillApi.endpoints.getResSkill.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(resSkillApi.endpoints.getResSkill.matchFulfilled, (state, action) => {
        state.loading = false;
        state.getResSkill = action.payload;
      })
      .addMatcher(resSkillApi.endpoints.getResSkill.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getResSkillSlice.reducer;
