import { createSlice } from "@reduxjs/toolkit";
const initialState = { currentWeather: null, isLoading: false };
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
  },
});
export const { weather, setIsLoading } = weatherSlice.actions;
export default weatherSlice;
