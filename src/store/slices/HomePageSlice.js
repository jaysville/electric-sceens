import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchShow from "../../helpers/fetchShow";

const initialState = {
  sectionOne: [],
  sectionTwo: [],
  sectionThree: [],
  sectionFour: [],
};
export const getSectionOne = createAsyncThunk(
  "homePageShows/getSectionOne",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/movie/now_playing",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

export const getSectionTwo = createAsyncThunk(
  "homePageShows/getSectionTwo",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/movie/popular",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

export const getSectionThree = createAsyncThunk(
  "homePageShows/getSectionThree",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/tv/airing_today",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

export const getSectionFour = createAsyncThunk(
  "homePageShows/getSectionFour",
  async (dispatch, getState) => {
    const response = await fetchShow(
      "https://api.themoviedb.org/3/tv/popular",
      process.env.REACT_APP_API_KEY
    );
    return response.results;
  }
);

const homeSlice = createSlice({
  name: "homePageShows",
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
    [getSectionFour.pending]: (state) => {
      state.sectionFour = [];
    },
    [getSectionFour.fulfilled]: (state, action) => {
      state.sectionFour = action.payload;
    },
    [getSectionFour.rejected]: (state) => {
      state.sectionFour = [];
    },
  },
});
export default homeSlice.reducer;
