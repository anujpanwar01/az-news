import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  notification: null,
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getGalleryImage: (state, action) => {
      state.images = action.payload;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});
export const { getGalleryImage, setNotification } = gallerySlice.actions;
export default gallerySlice;
