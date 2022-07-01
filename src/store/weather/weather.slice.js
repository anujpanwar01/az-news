import { createSlice } from "@reduxjs/toolkit";
const initialState = { currentWeather: null, notification: null, unit: "c" };
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setNotification(state, action) {
      state.notification = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});
export const { weather, setNotification, setUnit } = weatherSlice.actions;
export default weatherSlice;
