import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favoritesList",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesList = [...state.favoritesList, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (item) => item.id !== action.payload
      );
    },
    itemIsFavorite: (state, action) => {
      state.favoritesList.some((movie) => movie.id === action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites, itemIsFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
