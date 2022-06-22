import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covid/covid.slice";
import weatherSlice from "./weather/weather.slice";
const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    covid: covidSlice.reducer,
  },
});
export default store;
