import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchShow from "../../helpers/fetchShow";

const initialState = {
  sectionOne: [],
  sectionTwo: [],
  sectionThree: [],
};
export const getSectionOne = createAsyncThunk(
  "tvShowPageShows/getSectionOne",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/tv/top_rated",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

export const getSectionTwo = createAsyncThunk(
  "tvShowPageShows/getSectionTwo",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/tv/on_the_air",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

export const getSectionThree = createAsyncThunk(
  "tvShowPageShows/getSectionThree",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/tv/popular",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

const tvSlice = createSlice({
  name: "tvShowPageShows",
  initialState,
  reducers: {},
  extraReducers: {
    [getSectionOne.pending]: (state) => {
      state.sectionOne = [];
    },
    [getSectionOne.fulfilled]: (state, action) => {
      state.sectionOne = action.payload;
    },
    [getSectionOne.rejected]: (state) => {
      state.sectionOne = [];
    },
    [getSectionTwo.pending]: (state) => {
      state.sectionTwo = [];
    },
    [getSectionTwo.fulfilled]: (state, action) => {
      state.sectionTwo = action.payload;
    },
    [getSectionTwo.rejected]: (state) => {
      state.sectionTwo = [];
    },
    [getSectionThree.pending]: (state) => {
      state.sectionThree = [];
    },
    [getSectionThree.fulfilled]: (state, action) => {
      state.sectionThree = action.payload;
    },
    [getSectionThree.rejected]: (state) => {
      state.sectionThree = [];
    },
  },
});
export default tvSlice.reducer;
