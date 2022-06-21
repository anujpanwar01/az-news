import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  country: null,
  isLoading: false,
  error: "",
};
const covidSlice = createSlice({
  name: "covid-slice",
  initialState,
  reducers: {
    covidCountry: (state, action) => {
      state.country = action.payload;
    },
    countryIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { covidCountry, countryIsLoading } = covidSlice.actions;
export default covidSlice;
