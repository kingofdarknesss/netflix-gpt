import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptsearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggleGptsearch = !state.toggleGptsearch;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
