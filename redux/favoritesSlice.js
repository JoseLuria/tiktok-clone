import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoritesList.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        ({ _id }) => _id !== action.payload
      );
    },
    setFavorites: (state, action) => {
      state.favoritesList = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
