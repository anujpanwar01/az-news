import { createSlice } from "@reduxjs/toolkit";
const initialState = { currentWeather: null, isLoading: false, unit: "c" };
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});
export const { weather, setIsLoading, setUnit } = weatherSlice.actions;
export default weatherSlice;
