import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesSlice from "./favoritesSlice";

const saveToLocalStorage = (state) => {
  localStorage.favorites = JSON.stringify(state.favoritesList);
};

const reducer = combineReducers({
  favorites: favoritesSlice,
});

export const store = configureStore({ reducer });

store.subscribe(() => saveToLocalStorage(store.getState().favorites));
