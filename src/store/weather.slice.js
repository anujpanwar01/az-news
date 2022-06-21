import { createSlice } from "@reduxjs/toolkit";
const initialState = { countryCode: "" };
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    countryCode: (state, action) => {
      state.countryCode = action.payload;
    },
  },
});
export const { countryCode } = weatherSlice.actions;
export default weatherSlice;
