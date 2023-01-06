import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: []
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    add: (state, action) => {
      state.companies.push(action.payload);
      console.log(state.companies);
    },
    remove: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company.symbol !== action.payload
      );
    }
  }
});

export const { add, remove } = favouritesSlice.actions;

export default favouritesSlice.reducer;
