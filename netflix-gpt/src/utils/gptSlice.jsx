import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptsearch: false,
    movieNames:[],
    movieResults:null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggleGptsearch = !state.toggleGptsearch;
    },
    addGptMovieResult:(state,actions)=>{
      const { movieNames,movieResults } = actions.payload;
      state.movieResults = movieResults;
      state.movieNames=movieNames;
      

    },
  },
});

export const { toggleGptSearchView,addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
