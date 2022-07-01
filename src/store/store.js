import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covid/covid.slice";
import gallerySlice from "./gallery/gallery.slice";
weather

import newsSlice from "./news/news.slice";

import weatherSlice from "./weather/weather.slice";
const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    weather: weatherSlice.reducer,
    covid: covidSlice.reducer,
    gallery: gallerySlice.reducer,
  },
});
export default store;
