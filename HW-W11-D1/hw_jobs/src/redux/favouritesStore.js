import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favourites";

export const Store = configureStore({
  reducer: {
    favourites: favouritesReducer
  }
});

export default Store;
