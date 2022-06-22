import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  country: null,
  notification: null,
};
const covidSlice = createSlice({
  name: "covid-slice",
  initialState,
  reducers: {
    covidCountry: (state, action) => {
      state.country = action.payload;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { covidCountry, setNotification } = covidSlice.actions;
export default covidSlice;
