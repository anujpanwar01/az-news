import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  notification: null,
 weather

  filterImg: [],

};
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getGalleryImage: (state, action) => {
 weather
      state.images = action.payload;

      state.images.push(...action.payload);

      // get dublicate images form api then i used map because it will remove dublicate items;
      const map = new Map();
      for (const obj of state.images) {
        map.set(obj.id, obj);
      }

      const newArr = [];
      for (const val of map.values()) {
        newArr.push(val);
      }
      state.filterImg = newArr;

    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});
 weather


export const { getGalleryImage, setNotification } = gallerySlice.actions;
export default gallerySlice;
