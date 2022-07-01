import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covid/covid.slice";
import gallerySlice from "./gallery/gallery.slice";
import weatherSlice from "./weather/weather.slice";
const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    covid: covidSlice.reducer,
    gallery: gallerySlice.reducer,
  },
});
export default store;
