import { configureStore } from "@reduxjs/toolkit";
import homeSliceReducer from "./slices/HomePageSlice";
import movieSliceReducer from "./slices/MoviePageSlice";
import tvReducer from "./slices/TvShowPageSlice";
import favoritesReducer from "./slices/FavoritesSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, favoritesReducer);
export const store = configureStore({
  reducer: {
    home: homeSliceReducer,
    movies: movieSliceReducer,
    tvShows: tvReducer,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export let persistor = persistStore(store);
