import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  notification: null,
  filterImg: [],
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getGalleryImage: (state, action) => {
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

export const { getGalleryImage, setNotification } = gallerySlice.actions;
export default gallerySlice;
